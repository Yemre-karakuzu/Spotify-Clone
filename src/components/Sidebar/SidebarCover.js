import { useSelector, useDispatch } from "react-redux";
import { Icon } from "Icons";
import { setSidebar } from "stores/player";
function SidebarCover() {
  const current = useSelector((state) => state.player.current);
  const dispatch = useDispatch();
  return (
    <div className="pt-[100%] relative bg-black group ">
      <img
        src={current.image}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] -rotate-90 rounded-full absolute top-1 right-1 flex items-center justify-center "
      >
        <Icon size={16} name="arrowLeft" />
      </button>
    </div>
  );
}
export default SidebarCover;