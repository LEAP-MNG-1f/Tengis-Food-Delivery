"use client";

import Stack from "@mui/material/Stack";
import Link from "next/link";
import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    customColor?: string;
  }
  interface Palette {
    customColor?: string;
  }
}

const theme = createTheme({
  palette: {
    customColor: "#18BA51",
  },
});

type Anchor = "right";

export const Top = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-between w-[1200]">
        <div className="flex justify-center gap-[600px]">
          <Stack direction="row" spacing={5} ml={5} mt={5}>
            <Link href={`/`}>
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.85882 9.53921L5.65369 17.41C5.12892 18.3951 4.86597 19.4762 4.86597 20.5587C4.86597 21.6414 5.12892 22.7224
         5.65369 23.7074L9.85882 31.5784C10.6339 33.0322 12.1497 33.9402 13.7992 33.9402H18.2658V31.7105H18.2644C17.4403 31.7105 
          16.6824 31.2572 16.2948 30.5304L12.0913 22.6579C11.74 22.0017 11.5649 21.281 11.5649 20.5587C11.5649 19.8364 11.74 19.1158
          12.0913 18.4597L16.2948 10.5873C16.6824 9.86028 17.4403 9.40709 18.2644 9.40709H18.2658V7.17725H13.7992C12.1497 7.17725 10.6339 8.08541 9.85882 9.53921Z"
                  fill="black"
                />
                <path
                  d="M35.3423 17.4101L31.1374 9.53927C30.3621 8.0853 28.8465 7.1773 27.197 7.1773H22.7302V9.40698H22.7318C23.5558 9.40698 
         24.3137 9.86034 24.7012 10.5872L28.9047 18.4596C29.2562 19.1158 29.4309 19.8365 29.4309 20.5588C29.4309 21.2811 29.2562 22.0017 
         28.9047 22.658L24.7012 30.5303C24.3137 31.2572 23.5558 31.7104 22.7318 31.7104H22.7302V33.9403H27.197C28.8465 33.9403 30.3621 
           33.0323 31.1374 31.5783L35.3423 23.7075C35.8669 22.7224 36.13 21.6413 36.13 20.5588C36.13 19.4763 35.8669 18.3952 35.3423 17.4101Z"
                  fill="black"
                />
              </svg>
            </Link>
            <Link href={`/`}>
              <button className="font-bold hover:text-green-400 mt-2">
                Нүүр
              </button>
            </Link>
            <Link href={`menu`}>
              <button className="font-bold hover:text-green-400 mt-2">
                ХООЛНЫ ЦЭС
              </button>
            </Link>
            <Link href={`/deliver`}>
              <button className="font-bold hover:text-green-400 mt-2">
                ХҮРГЭЛТИЙН БҮС
              </button>
            </Link>
          </Stack>
        </div>
        <div className="flex gap-10 mt-5">
          {(["right"] as const).map((anchor) => (
            <div key={anchor}>
              <button
                className="flex items-center gap-2 px-4 py-2"
                onClick={toggleDrawer(anchor, true)}
              >
                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ color: "customColor" }}
                >
                  <ThemeProvider theme={theme}>
                    <Badge
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: theme.palette.customColor,
                          color: "white",
                        },
                      }}
                      badgeContent={21}
                    >
                      <svg
                        width="22"
                        height="20"
                        className="mt-2"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 7.48977H16.21L11.83 0.929766C11.64 0.649766 11.32 0.509766 11 0.509766C10.68 0.509766 10.36 0.649766 10.17
                 0.939766L5.79 7.48977H1C0.45 7.48977 0 7.93977 0 8.48977C0 8.57977 0.00999996 8.66977 0.04 8.75977L2.58 18.0298C2.81 18.8698 
                 3.58 19.4898 4.5 19.4898H17.5C18.42 19.4898 19.19 18.8698 19.43 18.0298L21.97 8.75977L22 8.48977C22 7.93977 21.55 7.48977 21 
                  7.48977ZM11 3.28977L13.8 7.48977H8.2L11 3.28977ZM17.5 17.4898L4.51 17.4998L2.31 9.48977H19.7L17.5 17.4898ZM11 11.4898C9.9 11.4898 
                  9 12.3898 9 13.4898C9 14.5898 9.9 15.4898 11 15.4898C12.1 15.4898 13 14.5898 13 13.4898C13 12.3898 12.1 11.4898 11 11.4898Z"
                          fill="black"
                        />
                      </svg>
                    </Badge>
                  </ThemeProvider>
                </Stack>
                <p className="font-bold text-sm tracking-[-0.3px]">Сагс</p>
              </button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <div className="max-w-[586px] w-[586px] h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <div className="flex justify-between py-[26px] px-6 items-center">
                        <button onClick={toggleDrawer(anchor, false)}></button>
                        <p className="font-Poppins text-xl font-black">
                          Таны сагс
                        </p>
                        <div></div>
                      </div>
                      <div className="2xl:h-[785px] xl:h-[600px] h-[840px] px-6 overflow-scroll scrollbar-none"></div>
                    </div>
                    <div className="grid grid-cols-2 items-center justify-between py-[10px] px-8 h-[172px] shadow-black shadow-2xl">
                      <div className="">
                        <p className="font-Poppins text-lg text-[#5E6166]">
                          Нийт төлөх дүн
                        </p>
                        <p className="text-lg font-bold">34,800₮</p>
                      </div>
                      <Link href={"/enter"} className="w-full">
                        <button className="w-full flex items-center justify-center bg-BrandGreen py-2 px-4 bg-green-500 flex-[1_0_0] rounded-[4px]">
                          <p className="font-Poppins text-white">Захиалах</p>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwipeableDrawer>
            </div>
          ))}
          <div className="flex gap-5 ml-10">
            <svg
              width="24"
              height="24"
              className="mt-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.54166C13.1841 5.54166 14.1528 6.51041 14.1528 7.69444C14.1528 8.87847 13.1841 9.84722 12 9.84722C10.816 9.84722 9.84725 8.87847 9.84725 7.69444C9.84725 6.51041 10.816 5.54166 12 5.54166ZM12 15.2292C14.9063 15.2292 18.2431 16.6177 18.4584 17.3819V18.4583H5.54169V17.3927C5.75697 16.6177 9.09378 15.2292 12 15.2292ZM12 3.38889C9.62121 3.38889 7.69447 5.31562 7.69447 7.69444C7.69447 10.0733 9.62121 12 12 12C14.3788 12 16.3056 10.0733 16.3056 7.69444C16.3056 5.31562 14.3788 3.38889 12 3.38889ZM12 13.0764C9.12607 13.0764 3.38892 14.5187 3.38892 17.3819V20.6111H20.6111V17.3819C20.6111 14.5187 14.874 13.0764 12 13.0764Z"
                fill="black"
              />
            </svg>
            <Link href={`/enter`}>
              <button className="hover:text-green-500 mt-2 font-bold">
                Хэрэглэгч
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};