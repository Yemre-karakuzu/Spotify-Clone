import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/"}
            exact="true"
            className={({ isActive }) =>
              isActive
                ? "bg-active text-white h-10 gap-x-4 flex items-center text-sm font-semibold rounded  px-4 "
                : "h-10 gap-x-4 flex items-center text-sm font-semibold rounded text-link hover:text-white px-4"
            }
            href="#"
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive
                ? "bg-active text-white h-10 gap-x-4 flex items-center text-sm font-semibold rounded  px-4 "
                : "h-10 gap-x-4 flex items-center text-sm font-semibold rounded text-link hover:text-white px-4"
            }
            // className="h-10 gap-x-4 flex items-center text-sm font-semibold rounded text-link hover:text-white px-4 "
            href="#"
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            className={({ isActive }) =>
              isActive
                ? "bg-active text-white h-10 gap-x-4 flex items-center text-sm font-semibold rounded  px-4 "
                : "h-10 gap-x-4 flex items-center text-sm font-semibold rounded text-link hover:text-white px-4"
            }
            // className="h-10 gap-x-4 flex items-center text-sm font-semibold rounded text-link hover:text-white px-4 "
            href="#"
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
