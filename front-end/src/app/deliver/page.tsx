import Delivery from "@/app/components/delivery/Delivery";
import Bottom from "@/app/components/topbottom/Bottom";
import Top from "@/app/components/topbottom/Top";

export default function Del() {
  return (
    <div>
      <Top />
      <Delivery />
      <div className="mt-32">
        <Bottom />
      </div>
    </div>
  );
}
