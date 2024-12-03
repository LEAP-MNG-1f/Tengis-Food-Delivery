"use client";
import Soup from "../components/menu/soup";
import Bottom from "../components/topbottom/Bottom";
import { Top } from "../components/topbottom/Top";


export default function soupo() {
  return (
    <div>
      <Top />
      <Soup />
      <div className="mt-32">
        <Bottom />
      </div>
    </div>
  );
}
