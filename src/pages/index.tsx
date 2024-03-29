import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Container } from "@mui/material";
import LandingTabs from "@/Components/LandingTabs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box sx={{ background: "#F4F4F5" }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <LandingTabs />
      </Container>
    </Box>
  );
}
