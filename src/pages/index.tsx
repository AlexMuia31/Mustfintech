import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Container } from "@mui/material";
import LandingTabs from "@/Components/LandingTabs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Container maxWidth={false} disableGutters={true}>
        <LandingTabs />
      </Container>
    </Box>
  );
}
