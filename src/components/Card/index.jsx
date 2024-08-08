import { PropTypes } from "prop-types";

const types = {
  primary: "bg-stone-200 dark:bg-stone-800",
  secondary:
    "bg-stone-300 dark:bg-stone-300 text-stone-950 dark:text-stone-800",
  third: "bg-stone-400 dark:bg-stone-300 text-stone-950 dark:text-stone-800",
};

const Card = ({ preTitle, title, children, type, maxWidth }) => {
  return (
    <div
      className={`${types[type]} p-4 pt-2 ${maxWidth} h-fit md:rounded-md shadow-md w-full`}
    >
      <p className='relative'>
        <span
          className='absolute -top-6 bg-stone-50 dark:bg-stone-950 p-2 rounded-md text-lime-900 dark:text-lime-100 font-azeret-mono truncate max-w-full'
          title={preTitle}
        >
          {preTitle}
        </span>
        <br />
        <span
          className='font-azeret-mono text-2xl font-bold text-ellipsis max-w-full'
          title={title}
        >
          {title}
        </span>
        <br />
        <span className='block pl-2'>{children}</span>
      </p>
    </div>
  );
};
Card.propTypes = {
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.any.isRequired,
  children: PropTypes.node,
  type: PropTypes.oneOf(["primary", "secondary", "third"]),
  maxWidth: PropTypes.string,
};

export default Card;
