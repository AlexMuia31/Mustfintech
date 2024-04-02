import { Layout } from "@/Components/Layout";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { Box, Toolbar } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Box>
        <Navbar />
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Layout>
  );
}
