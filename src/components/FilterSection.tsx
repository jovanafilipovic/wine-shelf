import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { categories, regions } from "../data";
import { useDispatch } from "react-redux";
import {
  filterByCategory,
  filterByRegion,
  sortByPrice,
} from "../redux/wineSlice";

const WinesHeader = () => {
  const [categoryAnchor, setCategoryAnchor] = useState<null | HTMLElement>(
    null
  );
  const [regionAnchor, setRegionAnchor] = useState<null | HTMLElement>(null);
  const [sortAnchor, setSortAnchor] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();

  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryAnchor(event.currentTarget);
  };
  const handleRegionClick = (event: React.MouseEvent<HTMLElement>) => {
    setRegionAnchor(event.currentTarget);
  };
  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchor(event.currentTarget);
  };

  const handleCategoryClose = () => setCategoryAnchor(null);
  const handleRegionClose = () => setRegionAnchor(null);
  const handleSortClose = () => setSortAnchor(null);

  const isCategoryOpen = Boolean(categoryAnchor);
  const isRegionOpen = Boolean(regionAnchor);
  const isSortOpen = Boolean(sortAnchor);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button
        aria-controls={isCategoryOpen ? "category-menu" : undefined}
        aria-haspopup="true"
        onClick={handleCategoryClick}
        sx={{ color: "#6b1e1e" }}
      >
        Category
      </Button>
      <Menu
        id="category-menu"
        anchorEl={categoryAnchor}
        open={isCategoryOpen}
        onClose={handleCategoryClose}
      >
        {categories.map((category) => (
          <MenuItem
            sx={{ color: "#6b1e1e" }}
            onClick={() => dispatch(filterByCategory(category.title))}
          >
            {category.title}
          </MenuItem>
        ))}
      </Menu>

      <Button
        aria-controls={isRegionOpen ? "region-menu" : undefined}
        aria-haspopup="true"
        onClick={handleRegionClick}
        sx={{ color: "#6b1e1e" }}
      >
        Region
      </Button>
      <Menu
        id="region-menu"
        anchorEl={regionAnchor}
        open={isRegionOpen}
        onClose={handleRegionClose}
      >
        {regions.map((region) => (
          <MenuItem
            sx={{ color: "#6b1e1e" }}
            onClick={() => dispatch(filterByRegion(region.country))}
          >
            {region.country}
          </MenuItem>
        ))}
      </Menu>

      <Button
        aria-controls={isSortOpen ? "sort-menu" : undefined}
        aria-haspopup="true"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleSortClick}
        sx={{ color: "#6b1e1e" }}
      >
        Sort By
      </Button>
      <Menu
        id="sort-menu"
        anchorEl={sortAnchor}
        open={isSortOpen}
        onClose={handleSortClose}
      >
        <MenuItem
          onClick={() => dispatch(sortByPrice("asc"))}
          sx={{ color: "#6b1e1e" }}
        >
          Price (asc)
        </MenuItem>
        <MenuItem
          onClick={() => dispatch(sortByPrice("desc"))}
          sx={{ color: "#6b1e1e" }}
        >
          Price (desc)
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default WinesHeader;
