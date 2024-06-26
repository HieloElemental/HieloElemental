import Layout from "../../containers/Layout";
import Header from "../../containers/Header";
import TextTypingAnimated from "../../components/TextTypingAnimated/index";
import Button from "../../components/Button";

import hieloElementalProfilePicture350 from "../../assets/hieloelemental-profile-picture-350.png";
import hieloElementalCurriculumVitae from "../../assets/hieloelemental-curriculum-vitae.pdf";
import Carousel from "../../containers/Carousel/index";

const skills = [
  {
    name: "React",
    icon: "React",
  },
  {
    name: "JavaScript",
    icon: "Javascript",
  },
  {
    name: "Tailwind CSS",
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
    name: "PHP",
    icon: "PHP",
  },
  {
    name: "C++",
    icon: "CPP",
  },
  {
    name: "Java",
    icon: "Java",
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
              <Carousel skills={skills} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
