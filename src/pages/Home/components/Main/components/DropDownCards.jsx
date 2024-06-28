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
          developer. I am driven by a relentless passion for coding, an
          insatiable thirst for learning, and a unique ability to adapt and
          thrive in both solo and team environments. I am ready to contribute
          and grow within a collaborative and innovative team.
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
