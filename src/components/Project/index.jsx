import { PropTypes } from "prop-types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const ProjectImg = ({ isOdd, image, title }) => {
  return (
    <figure
      className={`${
        isOdd
          ? "col-start-2 col-end-4 lg:col-start-4 lg:col-end-11"
          : "col-start-1 col-end-3 lg:col-end-6"
      } h-full relative row-span-full self-start`}
    >
      <img
        src={image}
        alt={title}
        className='object-cover w-full h-full rounded-md'
      />
      <div className='absolute top-0 left-0 h-full w-full rounded-md opacity-50 bg-stone-200 dark:bg-stone-900' />
    </figure>
  );
};
ProjectImg.propTypes = {
  isOdd: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Project = ({ image, title, description, technologies, link, index }) => {
  const isOdd = !!(index % 2);
  return (
    <div className='grid grid-cols-3 lg:grid-cols-10 mt-12'>
      {!isOdd && <ProjectImg isOdd={isOdd} image={image} title={title} />}
      <div
        className={`${
          isOdd
            ? "col-start-1 col-end-4 md:col-end-3 lg:col-end-7 flex-row-reverse"
            : "col-start-1 col-end-4 md:col-start-2 lg:col-start-3 lg:col-end-11 flex-row"
        } flex items-center justify-end relative row-span-full h-full z-10`}
      >
        <div
          className={`flex flex-col ${
            isOdd ? "items-start" : "items-end"
          } justify-center`}
        >
          <h1
            className={`px-8 py-2 font-bold text-2xl bg-stone-400 dark:bg-stone-700 ${
              isOdd ? "rounded-tr-md" : "rounded-tl-md"
            }`}
          >
            {title}
          </h1>
          <p
            className={`w-full self-center p-4 bg-stone-300 dark:bg-stone-600 ${
              isOdd ? "rounded-r-md" : "rounded-l-md"
            }`}
          >
            {description}
          </p>
          <div
            className={`pl-2 pr-4 pb-2 bg-stone-400 dark:bg-stone-700 flex flex-row gap-2 text-xs md:text-sm ${
              isOdd ? "rounded-br-md" : "rounded-bl-md"
            }`}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className='px-4 py-2 text-lime-50 bg-stone-600 dark:bg-stone-800 rounded-b-md'
              >
                {tech}
              </div>
            ))}
          </div>
          <div
            className={`py-2 px-4 text-xs bg-stone-700 dark:bg-stone-950 text-lime-100 dark:text-lime-100 font-azeret-mono rounded-b-md ${
              isOdd ? "ml-4" : "mr-4"
            }`}
          >
            <p className='flex items-center'>
              View on GitHub
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <ArrowTopRightOnSquareIcon className='h-4 inline ml-2' />
              </a>
            </p>
          </div>
        </div>
        <div
          className={`p-2 py-4 h-fit bg-stone-800 dark:bg-stone-950 text-lime-50 dark:text-lime-50 text-xs font-azeret-mono ${
            isOdd ? "rounded-r-md" : "rounded-l-md"
          }`}
        >
          F <br />
          e <br />
          a <br />
          t <br />
          u <br />
          r <br />
          e <br />
          d <br />
          <br />
          P <br />
          r <br />
          o <br />
          j <br />
          e <br />
          c <br />t
        </div>
      </div>
      {isOdd && <ProjectImg isOdd={isOdd} image={image} title={title} />}
    </div>
  );
};
Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Project;
