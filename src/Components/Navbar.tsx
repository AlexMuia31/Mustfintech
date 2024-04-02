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
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="h6" color="#000">
              회원상세
            </Typography>
            <Typography variant="h6" color="#FF4D4F">
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
