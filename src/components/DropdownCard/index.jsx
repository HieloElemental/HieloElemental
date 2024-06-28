import { PropTypes } from "prop-types";

const types = {
  primary: {
    block: "bg-stone-200 dark:bg-stone-800",
    preTitle: "text-lime-900 dark:text-lime-100",
  },
  secondary: {
    block: "bg-stone-800 dark:bg-stone-200 text-stone-50 dark:text-stone-950",
    preTitle: "text-lime-100 dark:text-lime-900",
  },
};

const DropDownCard = ({ preTitle, title, children, type }) => {
  return (
    <div
      className={`${types[type]?.block} p-4 pt-8 max-w-2xl rounded-b-md shadow-md`}
    >
      <p>
        <span className={`${types[type]?.preTitle} font-azeret-mono`}>
          {preTitle}
        </span>
        <br />
        <span className='font-azeret-mono text-2xl font-bold'>{title}</span>
        <br />
        {children}
      </p>
    </div>
  );
};
DropDownCard.propTypes = {
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default DropDownCard;
