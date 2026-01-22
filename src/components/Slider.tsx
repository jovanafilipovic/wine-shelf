import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: "left" | "right") => {
    setSlideIndex((prev) =>
      direction === "left"
        ? prev > 0
          ? prev - 1
          : sliderItems.length - 1
        : prev < sliderItems.length - 1
        ? prev + 1
        : 0
    );
  };

  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
      <IconButton
        onClick={() => handleClick("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "#fff7f7",
          opacity: 0.6,
        }}
      >
        <ArrowLeftIcon />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          height: "95vh",
          transition: "transform 1.2s ease",
          transform: `translateX(-${slideIndex * 100}vw)`,
        }}
      >
        {sliderItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              minWidth: "100vw",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={() => handleClick("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "#fff7f7",
          opacity: 0.6,
        }}
      >
        <ArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;
