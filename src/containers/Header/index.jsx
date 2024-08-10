import PropTypes from "prop-types";

import hieloElementalBanner from "../../assets/hieloelemental-banner.jpg";

const Header = ({ children }) => {
  return (
    <header
      className='bg-cover bg center h-96 bg-bottom drop-shadow-lg'
      style={{ backgroundImage: `url(${hieloElementalBanner})` }}
    >
      <div className='bg-stone-100 dark:bg-stone-900 bg-opacity-20 dark:bg-opacity-80 h-full flex items-center justify-center'>
        {children}
      </div>
    </header>
  );
};
Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
