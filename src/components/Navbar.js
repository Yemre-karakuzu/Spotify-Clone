import Navigation from "./NavBar/Navigation";
import Auth from "./NavBar/Auth";
import { useMatch } from "react-router-dom";
function Navbar() {
  const searchRoute = useMatch("/search");
  return (
    <nav className="h-{3.75rem} flex mt-4 items-center justify-between px-8 ">
      <Navigation />

      {searchRoute && <div>Search</div>}

      <Auth />
    </nav>
  );
}
export default Navbar;
