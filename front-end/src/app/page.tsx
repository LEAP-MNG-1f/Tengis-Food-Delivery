"use client";

import Carda from "./components/card/Card";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

type Anchor = "right";

export default function Home() {
  return (
    <div>
      <Top />
      <Carda />
      <Bottom />
    </div>
  );
}
