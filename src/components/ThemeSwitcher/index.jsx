import { useContext } from "react";
import { LocalStorageContext } from "../../contexts/LocalStorageProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const iconClassName = "flex h-14 p-4";

const ThemeSwitcher = () => {
  const { isDarkModeEnabled, setDarkMode } = useContext(LocalStorageContext);

  const switchDarkMode = () => {
    setDarkMode(!isDarkModeEnabled);
  };

  return (
    <button className='flex h-full' onClick={switchDarkMode}>
      {isDarkModeEnabled ? (
        <SunIcon className={iconClassName} />
      ) : (
        <MoonIcon className={iconClassName} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
