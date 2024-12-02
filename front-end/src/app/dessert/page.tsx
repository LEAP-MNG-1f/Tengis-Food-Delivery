"use client";
import Dessert from "../components/menu/Dessert";
import Top from "../components/topbottom/Top";
import Bottom from "../components/topbottom/Bottom";

export default function soupo() {
  return (
    <div>
      <Top />
      <div className="mt-20">
        <Dessert />
      </div>
      <div className="mt-32">
        <Bottom />
      </div>
    </div>
  );
}
