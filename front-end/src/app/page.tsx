"use client";

import Carda from "./components/card/Card";
import * as React from "react";
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