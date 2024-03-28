import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { Box, Toolbar } from "@mui/material";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../font/Pretendard-Regular.otf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box className={pretendard.className}>
      <Navbar />
      <Toolbar />
      <Component {...pageProps} />
    </Box>
  );
}
