"use client";
import MainCourse from "../components/menu/ MainCourse";
import Top from "../components/topbottom/Top";
import Bottom from "../components/topbottom/Bottom";

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
