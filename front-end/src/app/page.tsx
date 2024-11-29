"use client";

import Carda from "./components/card/Card";
import Stack from '@mui/material/Stack';
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Top from "./components/topbottom/Top";
import Bottom from "./components/topbottom/Bottom";

export default function Home() {
  return (
    <div>
      <Top />
      <Carda />
      <Bottom />
    </div>
  );
}