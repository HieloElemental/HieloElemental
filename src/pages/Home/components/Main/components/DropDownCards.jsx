import DropDownCard from "../../../../../components/DropdownCard/index";
import Button from "../../../../../components/Button/index";

import hieloElementalCurriculumVitae from "../../../../../assets/hieloelemental-curriculum-vitae.pdf";

const DropDownCards = () => {
  return (
    <div className='w-full md:max-w-4xl xl:max-w-7xl mb-4'>
      <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:gap-4'>
        <DropDownCard
          type='primary'
          preTitle='Background Summary'
          title="I'll colaborate with the web"
        >
          I&apos;m a Systems Engineering student and self-taught full-stack
          developer with a passion for coding, a drive to learn, and the ability
          to excel both independently and as part of a team. I&apos;m eager to
          bring my skills to a collaborative, innovative environment.
        </DropDownCard>
        <DropDownCard
          type='secondary'
          preTitle='Profesional Interests?'
          title="Here's my CV"
        >
          <Button type='primary' href={hieloElementalCurriculumVitae} download>
            Download CV
          </Button>
        </DropDownCard>
      </div>
    </div>
  );
};

export default DropDownCards;
