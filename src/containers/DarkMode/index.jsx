import { PropTypes } from "prop-types";
import { useContext, useEffect } from "react";
import { LocalStorageContext } from "../../contexts/LocalStorageProvider";

const DarkMode = ({ children }) => {
  const { isDarkModeEnabled } = useContext(LocalStorageContext);
  useEffect(() => {
    if (isDarkModeEnabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeEnabled]);

  return <>{children}</>;
};
DarkMode.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DarkMode;
