import notePlatformHomeImage from "../../../../../assets/note-platform-home.jpg";
import romeralEstereoHomeImage from "../../../../../assets/romeral-estereo-home.png";
import hieloelementalPortfolioHomeImage from "../../../../../assets/hieloelemental-portfolio-home.png";
import Project from "../../../../../components/Project";

const projects = [
  {
    image: notePlatformHomeImage,
    title: "Note Platform",
    description:
      "An educational platform notes web app built with MySQL,Express.js, React, and Node.js, which evolved into a comprehensive institutional platform. This project was developed as the Grade Project for Colegio Empresarial.",
    technologies: ["MySQL", "Express.js", "React", "Node"],
    link: "https://github.com/HieloElemental/note-platform",
  },
  {
    image: romeralEstereoHomeImage,
    title: "Romeral Estereo",
    description:
      "A radio website developed in php, using a React-like syntax, a bit of retro look, and a live audio transmision, This site has all the information of the radio and also has the song schedule for knowing when to hear and listen to your favorite genere",
    technologies: ["PHP", "HTML", "CSS"],
    link: "https://www.romeralestereo.com",
  },
  {
    image: hieloelementalPortfolioHomeImage,
    title: "HieloElemental Portfolio",
    description:
      "This webside was made by me from scratch using React and Tailwind CSS, it's a showcase of my skills, experiences, and projects. This website is made as a portfolio of my profile, made to show what things can I do. It also has a comunication with the github API to retrieve all my recent repositories and a blog where I will put my personal learning.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://www.hieloelemental.com",
  },
];

const ProjectsSection = () => {
  return (
    <section className='border-x-4 border-stone-800 dark:border-stone-950'>
      <h2 className='text-2xl font-azeret-mono text-center my-12'>
        -- Principal Projects --
      </h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} index={index} />
      ))}
    </section>
  );
};

export default ProjectsSection;
