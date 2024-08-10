import TextTypingAnimated from "../../../components/TextTypingAnimated";
import hieloElementalProfilePicture350 from "../../../assets/hieloelemental-profile-picture-350.png";
import Header from "../../../containers/Header";

const HomeHeader = () => {
  return (
    <Header className='header'>
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
  );
};

export default HomeHeader;
