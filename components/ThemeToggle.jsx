import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "../contexts/ThemeContexts";

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkTheme((current) => !current);
  };

  return (
    <li className="mocha latte flex items-center py-6 px-4 ">
      <DarkModeSwitch
        moonColor="#cdd6f4"
        sunColor="#4c4f69"
        checked={isDarkTheme}
        onChange={handleToggle}
        size={28}
      />
    </li>
  );
};

export default ThemeToggle;
