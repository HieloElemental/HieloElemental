import PropTypes from "prop-types";
const ErrorCard = ({ onCleanError }) => {
  return (
    <div className='p-4 pt-2 max-w-md w-full h-fit md:rounded-md shadow-md bg-red-400'>
      <p className='relative'>
        <span className='absolute -top-6 bg-red-700 p-2 rounded-md text-red-100 font-azeret-mono truncate max-w-full'>
          Whoops!
        </span>
        <br />
        <span className='font-azeret-mono text-2xl font-bold text-ellipsis max-w-full'>
          Error
        </span>
        <br />
        <span className='block pl-2'>
          Couldn&apos;t load. Try refreshing the site or{" "}
          <a
            className='cursor-pointer underline'
            onClick={() => onCleanError()}
          >
            clicking here.
          </a>
        </span>
      </p>
    </div>
  );
};
ErrorCard.propTypes = {
  onCleanError: PropTypes.func.isRequired,
};
export default ErrorCard;
