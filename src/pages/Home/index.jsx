import Layout from "../../containers/Layout";
import Header from "../../containers/Header";
import TextTypingAnimated from "../../components/TextTypingAnimated/index";
import Button from "../../components/Button";

import hieloElementalProfilePicture350 from "../../assets/hieloelemental-profile-picture-350.png";
import hieloElementalCurriculumVitae from "../../assets/hieloelemental-curriculum-vitae.pdf";
import notePlatformHomeImage from "../../assets/note-platform-home.jpg";
import romeralEstereoHomeImage from "../../assets/romeral-estereo-home.png";
import Carousel from "../../containers/Carousel/index";
import {
  AcademicCapIcon,
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { cloneElement } from "react";

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

const softSkills = [
  {
    skill: "Problem-Solving",
    icon: <PuzzlePieceIcon />,
    description:
      "Adept at identifying issues and developing creative, efficient solutions.",
  },
  {
    skill: "Communication",
    icon: <ChatBubbleLeftEllipsisIcon />,
    description:
      "Strong verbal and written communication skills, essential for effective collaboration and knowledge sharing.",
  },
  {
    skill: "Continuous Learning",
    icon: <AcademicCapIcon />,
    description:
      "Passionate about staying updated with the latest technologies and best practices.",
  },
  {
    skill: "Adaptability",
    icon: <ArrowPathIcon />,
    description:
      "Thrives in both solo and team environments, able to adjust to different workflows and challenges.",
  },
  {
    skill: "Collaboration",
    icon: <UserGroupIcon />,
    description:
      "Works well within a team, contributing to a cooperative and productive environment.",
  },
  {
    skill: "Self-Motivation",
    icon: <RocketLaunchIcon />,
    description:
      "Driven by an intrinsic love for coding and development, always pushing to improve and innovate.",
  },
  {
    skill: "Time Management",
    icon: <ClockIcon />,
    description:
      "Efficient at managing multiple projects and deadlines simultaneously.",
  },
  {
    skill: "Attention to Detail",
    icon: <MagnifyingGlassIcon />,
    description:
      "Meticulous in coding and design, ensuring high-quality results.",
  },
];

const Home = () => {
  return (
    <Layout>
      <Header>
        <figure className='relative w-full max-w-4xl flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-end'>
          <span className='relative -top-4 md:top-0 md:-left-24'>
            <TextTypingAnimated />
          </span>
          <img
            className='size-1/3 md:size-2/3 max-w-72'
            src={hieloElementalProfilePicture350}
            alt='Hielo Profile Picture'
          />
        </figure>
      </Header>
      <main className='flex justify-center items-center flex-col'>
        <div className='w-full md:max-w-4xl xl:max-w-7xl mb-4'>
          <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:gap-4'>
            <div className='bg-stone-200 dark:bg-stone-800 p-4 pt-8 max-w-2xl rounded-b-md shadow-md'>
              <p>
                <span className='text-lime-900 dark:text-lime-100 font-azeret-mono'>
                  Backgound Summary
                </span>
                <br />
                <span className='font-azeret-mono text-2xl font-bold'>
                  I&apos;ll colaborate with the web
                </span>
                <br />
                I&apos;m a Systems Engineering student and self-taught
                full-stack developer. I am driven by a relentless passion for
                coding, an insatiable thirst for learning, and a unique ability
                to adapt and thrive in both solo and team environments. I am
                ready to contribute and grow within a collaborative and
                innovative team.
              </p>
            </div>
            <div className='bg-stone-800 dark:bg-stone-200 text-stone-50 dark:text-stone-950 p-4 pt-8 rounded-b-md md:min-w-52 max-w-96 shadow-md'>
              <p>
                <span className='text-lime-100 dark:text-lime-900 font-azeret-mono text-xs'>
                  Profesional Interests?
                </span>
                <br />
                <span className='font-azeret-mono text-2xl font-bold'>
                  Here&apos;s my CV
                </span>
              </p>
              <Button
                type='primary'
                href={hieloElementalCurriculumVitae}
                download
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
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
        <div className='flex gap-y-8 gap-x-4 flex-col-reverse md:flex-row items-center md:items-start md:justify-between w-full max-w-screen-2xl py-12 md:px-4'>
          <div className='flex flex-col items-center'>
            <div className='w-full flex flex-wrap justify-around content-start items-center md:items-start flex-col md:flex-row gap-y-6 gap-x-4'>
              <div className='bg-stone-200 dark:bg-stone-800 p-4 pt-2 max-w-3xl h-fit md:rounded-md shadow-md'>
                <p className='relative'>
                  <span className='absolute -top-6 bg-stone-50 dark:bg-stone-950 p-2 rounded-md text-lime-900 dark:text-lime-100 font-azeret-mono'>
                    Want to know more about me?
                  </span>
                  <br />
                  <span className='font-azeret-mono text-2xl font-bold'>
                    Background
                  </span>
                  <br />
                  <span className='block pl-2'>
                    As a Systems Engineering student and self-taught full-stack
                    developer, I bring 5 years of hands-on experience in
                    crafting dynamic and responsive web applications.
                    Specializing in React and Tailwind CSS for the frontend, and
                    Express.js for the backend, I have a proven track record of
                    building efficient and scalable solutions. My projects,
                    including a comprehensive institutional web management
                    system, highlight my ability to merge technical prowess with
                    creative problem-solving. I am driven by a relentless
                    passion for coding, an insatiable thirst for learning, and a
                    unique ability to adapt and thrive in both solo and team
                    environments. Eager to bring my skills to a forward-thinking
                    company, I am ready to contribute and grow within a
                    collaborative and innovative team.
                  </span>
                </p>
              </div>
              <div className='bg-stone-300 dark:bg-stone-300 text-stone-950 dark:text-stone-800 pl-4 pr-8 pt-2 pb-4 w-full max-w-72 rounded-md'>
                <p className='relative'>
                  <span className='absolute -top-6 -right-4 bg-stone-950 p-2 rounded-md text-lime-100 font-azeret-mono'>
                    My presence in the web
                  </span>
                  <br />
                  <span className='font-azeret-mono text-2xl font-bold'>
                    Community Contributions
                  </span>
                  <br />
                  Through the ForgePen Tales project, I plan to develop and
                  share useful npm libraries and React components with the
                  community, such as a Google-OAuth pre-built system and a
                  GitHub-style Markdown text editor.
                </p>
              </div>
              <div className='bg-stone-400 dark:bg-stone-300 text-stone-950 dark:text-stone-800 pl-4 pr-8 pt-2 pb-4 w-full max-w-xl rounded-md'>
                <p className='relative'>
                  <span className='absolute -top-6 -right-4 bg-stone-950 p-2 rounded-md text-lime-100 font-azeret-mono'>
                    About my education
                  </span>
                  <br />
                  <span className='font-azeret-mono text-2xl font-bold'>
                    Educational Background
                  </span>
                  <br />I have a background in <b>PHP</b> from earlier studies
                  and currently, I am pursuing a <b>professional route</b> to
                  obtain a diploma in{" "}
                  <b>Full-Stack Development with JavaScript</b>, besides as
                  being a <b>Systems Engineering</b> student at the prestigious{" "}
                  <b>Universidad Nacional de Colombia</b>. My knowledge spans a
                  broad spectrum of technologies, including an intermediate
                  understanding of <b>MySQL</b> and PostgreSQL, as well as the
                  basics of <b>C++</b> and <b>Java</b>.
                </p>
              </div>
            </div>
            <h2 className='font-azeret-mono py-16 text-xl'>
              -- Principal Proyects --
            </h2>
            <section className='flex flex-col gap-8 md:border-x-2 border-stone-200'>
              <div className='grid grid-cols-3 lg:grid-cols-10'>
                <figure className='h-full relative row-span-full col-start-1 col-end-3 md:col-end-3 lg:col-span-6 lg:col-end-7 self-center'>
                  <img
                    src={notePlatformHomeImage}
                    alt='Project 1'
                    className='object-cover w-full h-full rounded-md'
                  />
                  <div className='absolute -top-0 l-0 h-full w-full rounded-md opacity-80 bg-stone-900' />
                </figure>
                <div className='flex flex-row items-center justify-end relative row-span-full col-start-1 col-end-4 md:col-span-3 lg:col-start-4 lg:col-end-11 h-full'>
                  <div className='flex flex-col items-end justify-center'>
                    <h1 className='px-8 py-2 font-bold text-2xl bg-stone-700 rounded-tl-md'>
                      Note Platform
                    </h1>
                    <p className='w-full text-right self-center p-4 bg-stone-600 rounded-l-md'>
                      An educational platform notes web app built with MySQL,
                      Express.js, React, and Node.js, which evolved into a
                      comprehensive institutional platform. This project was
                      developed as the Grade Project for Colegio Empresarial.
                    </p>
                    <div className='pl-2 pr-4 pb-2 bg-stone-700 flex flex-row gap-2 rounded-bl-md text-xs md:text-sm'>
                      <div className='px-4 py-2 bg-stone-800 rounded-b-md'>
                        MySQL
                      </div>
                      <div className='px-4 py-2 bg-stone-800 rounded-b-md'>
                        Express.js
                      </div>
                      <div className='px-4 py-2 bg-stone-800 rounded-b-md'>
                        React
                      </div>
                      <div className='px-4 py-2 bg-stone-800 rounded-b-md'>
                        Node
                      </div>
                    </div>
                    <div className='py-2 px-4 mr-4 text-xs bg-stone-950 text-lime-100 dark:text-lime-100 font-azeret-mono rounded-b-md'>
                      <p className='flex items-center'>
                        View on GitHub
                        <a
                          href='https://github.com/HieloElemental/note-platform'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ArrowTopRightOnSquareIcon className='h-4 inline ml-2' />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='p-2 py-4 h-fit bg-stone-950 rounded-l-md text-xs font-azeret-mono'>
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
              </div>
              <div className='grid grid-cols-3 lg:grid-cols-10'>
                <div className='flex flex-row items-center justify-end relative row-span-full col-start-1 col-end-4 md:col-end-3 lg:col-end-8 h-full z-10'>
                  <div className='p-2 py-4 h-fit bg-stone-950 rounded-r-md text-xs font-azeret-mono'>
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
                  <div className='flex flex-col items-start justify-center'>
                    <h1 className='px-8 py-2 font-bold text-2xl bg-stone-700 rounded-tr-md'>
                      Romeral Estereo
                    </h1>
                    <p className='w-full self-center p-4 bg-stone-600 rounded-r-md'>
                      An educational platform notes web app built with MySQL,
                      Express.js, React, and Node.js, which evolved into a
                      comprehensive institutional platform. This project was
                      developed as the Grade Project for Colegio Empresarial.
                    </p>
                    <div className='pl-4 pr-2 pb-2 bg-stone-700 flex flex-row gap-2 rounded-br-md text-xs md:text-sm'>
                      <div className='px-4 py-2 bg-stone-800 rounded-b-md'>
                        PHP
                      </div>
                      <div className='px-4 py-2 bg-stone-800 rounded-b-md'>
                        HTML
                      </div>
                      <div className='px-4 py-2 bg-stone-800 rounded-b-md'>
                        CSS
                      </div>
                    </div>
                    <div className='py-2 px-4 ml-4 text-xs bg-stone-950 text-lime-100 dark:text-lime-100 font-azeret-mono rounded-b-md'>
                      <p className='flex items-center'>
                        View online
                        <a
                          href='https://www.romeralestereo.com'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ArrowTopRightOnSquareIcon className='h-4 inline ml-2' />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <figure className='h-full relative row-span-full col-start-2 col-end-4 md:col-start-2 md:col-end-4 lg:col-start-5 lg:col-end-11 self-center'>
                  <img
                    src={romeralEstereoHomeImage}
                    alt='Project 1'
                    className='object-cover w-full h-full rounded-md'
                  />
                  <div className='absolute -top-0 l-0 h-full w-full rounded-md opacity-80 bg-stone-900' />
                </figure>
              </div>
            </section>
          </div>
          <section className='max-w-sm'>
            <h2 className='flex items-center justify-center w-fit text-sm bg-stone-400 dark:bg-stone-950 py-1 px-4 ml-12 h-8 font-azeret-mono text-lime-100 dark:text-lime-100 rounded-t-lg shadow-inner'>
              Soft Skills
            </h2>
            <div className='bg-stone-200 dark:bg-stone-800 px-8 md:rounded-md'>
              <ol className='relative border-s border-stone-400 dark:border-stone-600 py-4'>
                {softSkills.map(({ skill, icon, description }) => {
                  return (
                    <li key={skill} className='py-5 ms-4'>
                      <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700' />
                      <h3 className='flex gap-2 text-lg font-semibold'>
                        {cloneElement(icon, { className: "w-6" })} {skill}
                      </h3>
                      <p className='text-base font-normal'>{description}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
