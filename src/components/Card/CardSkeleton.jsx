import PropTypes from "prop-types";

const skeletonTypes = {
  primary: "bg-stone-200 dark:bg-stone-800",
  secondary:
    "bg-stone-300 dark:bg-stone-300 text-stone-950 dark:text-stone-800",
  third: "bg-stone-400 dark:bg-stone-300 text-stone-950 dark:text-stone-800",
};

const CardSkeleton = ({ type = "primary", maxWidth = "max-w-sm" }) => {
  return (
    <div
      className={`${skeletonTypes[type]} p-4 pt-2 ${maxWidth} w-full h-fit md:rounded-md shadow-md animate-pulse`}
    >
      <p className='relative'>
        <span className='absolute -top-6 bg-stone-50 dark:bg-stone-950 p-2 rounded-md w-24 h-6' />
        <br />
        <span className='block w-1/2 h-8 mt-4 bg-stone-50 dark:bg-stone-950 rounded-md' />
        <br />
        <span className='block w-full h-6 mt-2 bg-stone-50 dark:bg-stone-950 rounded-md' />
      </p>
    </div>
  );
};

CardSkeleton.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "third"]),
  maxWidth: PropTypes.string,
};

export default CardSkeleton;
