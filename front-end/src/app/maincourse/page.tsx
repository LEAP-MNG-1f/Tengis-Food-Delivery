"use client";
import MainCourse from "../components/menu/ MainCourse";
import Bottom from "../components/topbottom/Bottom";
import { Top } from "../components/topbottom/Top";

export default function soupo() {
  return (
    <div>
      <Top />
      <MainCourse />
      <div className="mt-32">
        <Bottom />
      </div>
    </div>
  );
}
