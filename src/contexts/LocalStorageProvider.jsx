import { createContext } from "react";
import { PropTypes } from "prop-types";
import Loading from "../containers/Loading/index";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageContext = createContext();

const LocalStorageProvider = ({ children }) => {
  const [loading, isDarkModeEnabled, setDarkMode] = useLocalStorage(
    "darkMode_V1",
    true
  );

  return (
    <LocalStorageContext.Provider value={{ isDarkModeEnabled, setDarkMode }}>
      <Loading isActive={loading}>{children}</Loading>
    </LocalStorageContext.Provider>
  );
};
LocalStorageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LocalStorageProvider, LocalStorageContext };
