import Layout from "../../containers/Layout";
import Header from "../../containers/Header";
import TextTypingAnimated from "../../components/TextTypingAnimated/index";
import Button from "../../components/Button";

import hieloElementalProfilePicture350 from "../../assets/hieloelemental-profile-picture-350.png";
import hieloElementalCurriculumVitae from "../../assets/hieloelemental-curriculum-vitae.pdf";

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
      <main className='flex justify-center'>
        <div className='md:max-w-4xl xl:max-w-7xl'>
          <div className='flex flex-col md:flex-row items-center md:items-start md:gap-4'>
            <div className='bg-stone-200 dark:bg-stone-800 p-4 pt-8 max-w-2xl rounded-b-md'>
              <p>
                <span className='text-lime-900 dark:text-lime-100 font-azeret-mono'>
                  Backgound Summary
                </span>
                <h1 className='font-azeret-mono text-2xl font-bold'>
                  I&apos;ll colaborate with the web
                </h1>
                I&apos;m a Systems Engineering student and self-taught
                full-stack developer. I am driven by a relentless passion for
                coding, an insatiable thirst for learning, and a unique ability
                to adapt and thrive in both solo and team environments. I am
                ready to contribute and grow within a collaborative and
                innovative team.
              </p>
            </div>
            <div className='bg-stone-800 dark:bg-stone-200 text-stone-50 dark:text-stone-950 p-4 pt-8 rounded-b-md max-w-96'>
              <p>
                <span className='text-lime-100 dark:text-lime-900 font-azeret-mono text-xs'>
                  Profesional Interests?
                </span>
                <h1 className='font-azeret-mono text-2xl font-bold'>
                  Here&apos;s my CV
                </h1>
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
      </main>
    </Layout>
  );
};

export default Home;
