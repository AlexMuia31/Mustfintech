import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import React from "react";

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: any) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <Box>
      <Slider {...settings}>
        <Box
          sx={{
            background: "#FAFAFA",
            borderRadius: "10px",
            border: "1px solid #B1B4BB",
            height: { sm: "645px", xs: "400px" },
          }}
        >
          <Typography textAlign="center" mt="50%">
            img
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#FAFAFA",
            borderRadius: "10px",
            border: "1px solid #B1B4BB",
            height: { sm: "645px", xs: "400px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography textAlign="center" mt="50%">
            img
          </Typography>
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
