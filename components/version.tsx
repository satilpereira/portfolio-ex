import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import packageJson from "../package.json";
const hitMePunk = localFont({
  src: "../fonts/hit-me-punk.ttf",
});
import { Knewave } from "next/font/google";
const knewave = Knewave({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-knewave",
});

const Version = () => {
  return (
    <div
      className={`${knewave.className} bottom-0 right-0 absolute text-2xl text-white bg-red-500 px-2 border-4 border-white m-2 crt-text crt-content`}
    >
      v{packageJson.version}
    </div>
  );
};

export default Version;
