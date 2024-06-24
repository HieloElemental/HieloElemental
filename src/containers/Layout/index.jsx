import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className='mt-14 z-0'>{children}</div>;
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
