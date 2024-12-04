"use client";

import Stack from "@mui/material/Stack";
import Link from "next/link";
import React, { MouseEvent, KeyboardEvent, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
    

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-between w-[1200px]">
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
                  d="M9.85882 9.53921L5.65369 17.41C5.12892 18.3951 4.86597 19.4762 4.86597 20.5587C4.86597 21.6414 5.12892 22.7224 5.65369 23.7074L9.85882 31.5784C10.6339 33.0322 12.1497 33.9402 13.7992 33.9402H18.2658V31.7105H18.2644C17.4403 31.7105 16.6824 31.2572 16.2948 30.5304L12.0913 22.6579C11.74 22.0017 11.5649 21.281 11.5649 20.5587C11.5649 19.8364 11.74 19.1158 12.0913 18.4597L16.2948 10.5873C16.6824 9.86028 17.4403 9.40709 18.2644 9.40709H18.2658V7.17725H13.7992C12.1497 7.17725 10.6339 8.08541 9.85882 9.53921Z"
                  fill="black"
                />
                <path
                  d="M35.3423 17.4101L31.1374 9.53927C30.3621 8.0853 28.8465 7.1773 27.197 7.1773H22.7302V9.40698H22.7318C23.5558 9.40698 24.3137 9.86034 24.7012 10.5872L28.9047 18.4596C29.2562 19.1158 29.4309 19.8365 29.4309 20.5588C29.4309 21.2811 29.2562 22.0017 28.9047 22.658L24.7012 30.5303C24.3137 31.2572 23.5558 31.7104 22.7318 31.7104H22.7302V33.9403H27.197C28.8465 33.9403 30.3621 33.0323 31.1374 31.5783L35.3423 23.7075C35.8669 22.7224 36.13 21.6413 36.13 20.5588C36.13 19.4763 35.8669 18.3952 35.3423 17.4101Z"
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
                      badgeContent={null}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 9.49001H17.21L12.83 2.93001C12.64 2.65001 12.32 2.51001 12 2.51001C11.68 2.51001 11.36 2.65001 11.17 2.94001L6.79 9.49001H2C1.45 9.49001 1 9.94001 1 10.49C1 10.58 1.01 10.67 1.04 10.76L3.58 20.03C3.81 20.87 4.58 21.49 5.5 21.49H18.5C19.42 21.49 20.19 20.87 20.43 20.03L22.97 10.76L23 10.49C23 9.94001 22.55 9.49001 22 9.49001ZM12 5.29001L14.8 9.49001H9.2L12 5.29001ZM18.5 19.49L5.51 19.5L3.31 11.49H20.7L18.5 19.49ZM12 13.49C10.9 13.49 10 14.39 10 15.49C10 16.59 10.9 17.49 12 17.49C13.1 17.49 14 16.59 14 15.49C14 14.39 13.1 13.49 12 13.49Z"
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
                    <div>
                      <div className="flex justify-center py-[26px] px-6 items-center">
                        <button onClick={toggleDrawer(anchor, false)}></button>
                        <p className="font-Poppins text-xl font-black">
                          Таны сагс
                        </p>
                      </div>
                      <div className="h-[840px] px-6 overflow-scroll scrollbar-none"></div>
                    </div>
                    <div className="grid grid-cols-2 items-center justify-between py-[10px] px-8 h-[172px] shadow-black shadow-2xl">
                      <div>
                        <p className="font-Poppins text-lg text-[#5E6166]">
                          Нийт төлөх дүн
                        </p>
                      </div>
                      <Link href={`/enter`} className="w-full">
                        <button className="w-full flex items-center justify-center bg-green-500 py-2 px-4 rounded-[4px]">
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
              width="18"
              height="18"
              className="mt-3"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2.54166C10.184 2.54166 11.1528 3.51041 11.1528 4.69444C11.1528 5.87847 10.184 6.84722 9 6.84722C7.81597 6.84722 6.84722 5.87847 6.84722 4.69444C6.84722 3.51041 7.81597 2.54166 9 2.54166ZM9 12.2292C11.9062 12.2292 15.2431 13.6177 15.4583 14.3819V15.4583H2.54166V14.3927C2.75694 13.6177 6.09375 12.2292 9 12.2292ZM9 0.388885C6.62118 0.388885 4.69444 2.31562 4.69444 4.69444C4.69444 7.07326 6.62118 9 9 9C11.3788 9 13.3056 7.07326 13.3056 4.69444C13.3056 2.31562 11.3788 0.388885 9 0.388885ZM9 10.0764C6.12604 10.0764 0.388885 11.5187 0.388885 14.3819V17.6111H17.6111V14.3819C17.6111 11.5187 11.874 10.0764 9 10.0764Z"
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
