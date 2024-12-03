"use client";
import Menu from "../components/menu/Menu";
import Bottom from "../components/topbottom/Bottom";
import { Top } from "../components/topbottom/Top";



export default function Menuu() {
  return (
    <div>
      <Top />
      <div className="mt-20">
        <Menu />
      </div>
      <div className="mt-32">
        <Bottom />
      </div>
    </div>
  );
}
