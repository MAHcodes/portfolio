import Branding from "./Branding";
import Nav from "./Nav";

const Header = () => (
  <header className="container rounded-b-lg bg-crust">
    <div className="px-2 flex items-center justify-between gap-4">
      <Branding />
      <Nav />
    </div>
  </header>
);

export default Header;
