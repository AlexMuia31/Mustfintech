import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar sx={{ background: "transparent" }}>
      <Toolbar>
        <Container maxWidth="xl" disableGutters={true}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="h6" color="#000">
              회원상세
            </Typography>
            <Typography variant="h6" color="#FF4D4F">
              * 필수항목
            </Typography>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
