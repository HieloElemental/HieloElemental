import Carousel from "../../containers/Carousel";

const technicalSkills = [
  {
    name: "React",
    icon: "React",
  },
  {
    name: "JavaScript",
    icon: "Javascript",
  },
  {
    name: "TailwindCSS",
    icon: "Tailwind",
  },
  {
    name: "Node.js",
    icon: "Nodejs",
  },
  {
    name: "Express.js",
    icon: "Expressjs",
  },
  {
    name: "MySQL",
    icon: "MySQL",
  },
  {
    name: "KnexJs",
    icon: "Knexjs",
  },
  {
    name: "Git",
    icon: "Git",
  },
  {
    name: "Github",
    icon: "GitHub",
  },
  {
    name: "React Router",
    icon: "ReactRouter",
  },
  {
    name: "HTML5",
    icon: "Html5",
  },
  {
    name: "CSS3",
    icon: "Css3",
  },
  {
    name: "NPM",
    icon: "NPM",
  },
  {
    name: "PHP (old)",
    icon: "PHP",
  },
  {
    name: "C++ (old)",
    icon: "CPP",
  },
  {
    name: "Java (old)",
    icon: "Java",
  },
];
const TechnicalSkills = () => {
  return (
    <div className='w-full bg-stone-300 dark:bg-stone-950 pt-8 flex flex-col items-center justify-center'>
      <div className='flex flex-col items-start w-full md:max-w-5xl'>
        <h1 className='w-fit text-sm bg-stone-500 dark:bg-stone-800 pt-2 pb-1 px-4 ml-12 font-azeret-mono text-lime-100 dark:text-lime-100 rounded-t-lg shadow-inner'>
          Technical Skills
        </h1>
        <div className='bg-stone-100 dark:bg-stone-900 p-4 lg:rounded-t-lg w-full swiper multiple-slide-carousel swiper-container relative'>
          <p>Here are some languages and technologies that I use:</p>
          <Carousel skills={technicalSkills} />
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
