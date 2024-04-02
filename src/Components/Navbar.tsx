import {
  AppBar,
  Box,
  Container,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar sx={{ background: "#F5F5F5" }} elevation={0}>
      <Toolbar>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography
              sx={{
                color: "#0B101A",
                fontWeight: 700,
                fontFamily: "Pretendard",
                fontSize: "24px",
              }}
            >
              회원상세
            </Typography>
            <Typography
              variant="h6"
              color="#FF4D4F"
              sx={{
                fontWeight: 500,
                fontFamily: "Pretendard",
                fontSize: "14px",
              }}
            >
              * 필수항목
            </Typography>
          </Box>
          <Divider sx={{ mt: "7px" }} />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
