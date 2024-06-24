import Layout from "../../containers/Layout";
import Header from "../../containers/Header";
import TextTypingAnimated from "../../components/TextTypingAnimated/index";

import hieloElementalProfilePicture350 from "../../assets/hieloelemental-profile-picture-350.png";
const Home = () => {
  return (
    <Layout>
      <Header>
        <figure className='relative w-full max-w-3xl flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-end'>
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
    </Layout>
  );
};

export default Home;
