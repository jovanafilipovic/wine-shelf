import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const WinesHeader = () => {
  const [categoryAnchor, setCategoryAnchor] = useState<null | HTMLElement>(
    null
  );
  const [regionAnchor, setRegionAnchor] = useState<null | HTMLElement>(null);
  const [sortAnchor, setSortAnchor] = useState<null | HTMLElement>(null);

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
        <MenuItem onClick={handleCategoryClose}>Red</MenuItem>
        <MenuItem onClick={handleCategoryClose}>Rose</MenuItem>
        <MenuItem onClick={handleCategoryClose}>White</MenuItem>
        <MenuItem onClick={handleCategoryClose}>Sparking Wine</MenuItem>
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
        <MenuItem onClick={handleRegionClose}>Serbia</MenuItem>
        <MenuItem onClick={handleRegionClose}>Montenegro</MenuItem>
        <MenuItem onClick={handleRegionClose}>North Macedonia</MenuItem>
        <MenuItem onClick={handleRegionClose}>Croatia</MenuItem>
        <MenuItem onClick={handleRegionClose}>Slovenia</MenuItem>
        <MenuItem onClick={handleRegionClose}>Albania</MenuItem>
        <MenuItem onClick={handleRegionClose}>Greece</MenuItem>
        <MenuItem onClick={handleRegionClose}>Bulgaria</MenuItem>
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
        <MenuItem onClick={handleSortClose}>Price (asc)</MenuItem>
        <MenuItem onClick={handleSortClose}>Price (desc)</MenuItem>
      </Menu>
    </Box>
  );
};

export default WinesHeader;
