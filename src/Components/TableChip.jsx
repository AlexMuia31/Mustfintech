import { Box, Typography } from "@mui/material";
import React from "react";

const TableChip = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: "61px",
          justifyContent: "center",
          alignItems: "center",
          background: "#EBEEF3",
          height: "29px",
          borderRadius: "8px",
          border: "1px solid #D7D8DA",
        }}
      >
        <Typography
          sx={{
            color: "#222222",
            fontFamily: "Pretendard",
            fontWeight: 500,
            letterSpacing: "-0.02px",
            fontSize: "14px",
          }}
        >
          보기
        </Typography>
      </Box>
    </Box>
  );
};

export default TableChip;
