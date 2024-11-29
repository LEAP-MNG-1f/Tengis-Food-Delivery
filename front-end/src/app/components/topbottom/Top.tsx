"use client";

import Stack from "@mui/material/Stack";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";

type Anchor = "right";
export default function Top() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="flex justify-center">
          <h1 className="font-bold text-[20px]">Таны сагс</h1>
        </div>
      </List>

      <Divider />
      <List>
        <div className="flex justify-center mt-10"></div>
      </List>
    </Box>
  );
  return (
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
          <button className="font-bold hover:text-green-400 mt-2">Нүүр</button>
        </Link>
        <Link href={`/menu`}>
          <button className="font-bold hover:text-green-400 mt-2">
            ХООЛНЫ ЦЭС
          </button>
        </Link>
        <Link href={`/`}>
          <button className="font-bold hover:text-green-400 mt-2">
            ХҮРГЭЛТИЙН БҮС
          </button>
        </Link>
      </Stack>
      <div className="flex gap-2 font-bold mt-10 mr-20">
        <div className="flex gap-2">
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
          <React.Fragment>
            <ButtonGroup>
              {(["right"] as const).map((anchor) => (
                <Button key={anchor} onClick={toggleDrawer(anchor, true)}>
                  <h1 className="font-bold hover:text-green-500">Сагс</h1>
                </Button>
              ))}
            </ButtonGroup>
            {(["right"] as const).map((anchor) => (
              <Drawer
                key={anchor}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            ))}
          </React.Fragment>
        </div>
        <button className="flex gap-5 ml-10">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00174 2.54145C10.1858 2.54145 11.1545 3.5102 11.1545 4.69423C11.1545 5.87825 10.1858 6.847 9.00174 6.847C7.81771 6.847 6.84896 5.87825 6.84896 4.69423C6.84896 3.5102 7.81771 2.54145 9.00174 2.54145ZM9.00174 12.2289C11.908 12.2289 15.2448 13.6175 15.4601 14.3817V15.4581H2.5434V14.3925C2.75868 13.6175 6.09549 12.2289 9.00174 12.2289ZM9.00174 0.388672C6.62292 0.388672 4.69618 2.31541 4.69618 4.69423C4.69618 7.07305 6.62292 8.99978 9.00174 8.99978C11.3806 8.99978 13.3073 7.07305 13.3073 4.69423C13.3073 2.31541 11.3806 0.388672 9.00174 0.388672ZM9.00174 10.0762C6.12778 10.0762 0.390625 11.5185 0.390625 14.3817V17.6109H17.6128V14.3817C17.6128 11.5185 11.8757 10.0762 9.00174 10.0762Z"
              fill="black"
            />
          </svg>
          <h1 className="text-black hover:text-green-500">Нэвтрэх</h1>
        </button>
      </div>
    </div>
  );
}
