import TechnicalSkills from "../../../../components/TechnicalSkills";
import SoftSkills from "../../../../components/SoftSkills";
import ProjectsSection from "./components/ProjectsSection";
import DropDownCards from "./components/DropDownCards";
import Cards from "./components/Cards";

const Main = () => {
  return (
    <main className='flex justify-center items-center flex-col'>
      <DropDownCards />
      <TechnicalSkills />
      <div className='flex gap-y-8 gap-x-4 flex-col-reverse md:flex-row items-center md:items-start md:justify-between w-full max-w-screen-2xl py-12 md:px-4'>
        <div className='flex flex-col items-center'>
          <Cards />
          <ProjectsSection />
        </div>
        <SoftSkills />
      </div>
    </main>
  );
};

export default Main;
