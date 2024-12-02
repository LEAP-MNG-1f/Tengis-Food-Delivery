"use client";

import Stack from "@mui/material/Stack";
import Link from "next/link";
import Soup from "../components/menu/soup";
import Bottom from "../components/topbottom/Bottom";
import Top from "../components/topbottom/Top";

export default function soupo() {
  return (
    <div>
      <Top />
      <div className="mt-20">
        <Soup />
      </div>
      <div className="mt-20">
        <Bottom />
      </div>
    </div>
  );
}
