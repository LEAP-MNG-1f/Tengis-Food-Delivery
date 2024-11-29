"use client";
import Menu from "../components/menu/Menu";
import Top from "../components/topbottom/Top";
import Bottom from "../components/topbottom/Bottom";

export default function Menuu() {
  return (
    <div>
      <Top />
      <div className="mt-20">
        <Menu />
      </div>
      <div className="mt-20">
        <Bottom />
      </div>
    </div>
  );
}
