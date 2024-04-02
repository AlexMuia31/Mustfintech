import React from "react";
import localFont from "next/font/local";

const customFont = localFont({
  src: [
    { path: "./font/Pretendard-Regular.otf", weight: "500" },
    { path: "./font/Pretendard-Bold.otf", weight: "600" },
  ],
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <body>{children}</body>;
};
