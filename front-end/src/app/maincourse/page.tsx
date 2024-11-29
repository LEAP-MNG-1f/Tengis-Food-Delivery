"use client";
;
import MainCourse from "../components/menu/ MainCourse";
import Top from "../components/topbottom/Top";
import Bottom from "../components/topbottom/Bottom";

export default function soupo() {
  return (
    <div>
      <Top />
      <div className="mt-20">
        <MainCourse />
      </div>
      <div className="mt-20">
        <Bottom />
      </div>
    </div>
  );
}
