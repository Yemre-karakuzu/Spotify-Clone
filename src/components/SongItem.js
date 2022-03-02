import { NavLink } from "react-router-dom";
import { Icon } from "Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "stores/player";
function SongItem({ item }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);
  const isCurrentItem = current?.id === item.id && playing;
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-lg";
      default:
        return "rounded";
    }
  };
  const updateCurrent = () => {
    if (current.id === item.id) {
      playing ? controls.pause() : controls.play();
    }
    dispatch(setCurrent(item));
  };
  return (
    <NavLink
      className={"bg-footer p-4 rounded hover:bg-active group "}
      key={item.id}
      to="/"
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image}
          alt=""
          className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
            item
          )}`}
        />
        <button
          onClick={updateCurrent}
          className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2  items-center justify-center ${
            !isCurrentItem ? "hidden" : "flex"
          } group-hover:flex group-focus:flex`}
        >
          <Icon name={isCurrentItem ? "pause" : "play"} size={16}></Icon>
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {" "}
        {item.title}{" "}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
}

export default SongItem;
