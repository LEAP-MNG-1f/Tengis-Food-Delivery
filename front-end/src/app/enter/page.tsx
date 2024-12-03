import Bottom from "@/app/components/topbottom/Bottom";

import Enter from "../components/enter/Enter";
import { Top } from "../components/topbottom/Top";

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
