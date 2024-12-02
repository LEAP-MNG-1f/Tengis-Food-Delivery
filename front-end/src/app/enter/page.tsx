import Bottom from "@/app/components/topbottom/Bottom";
import Top from "@/app/components/topbottom/Top";
import Enter from "../components/enter/Enter";

export default function Del() {
  return (
    <div>
      <Top />
      <Enter />
      <div className="mt-32">
        <Bottom />
      </div>
    </div>
  );
}
