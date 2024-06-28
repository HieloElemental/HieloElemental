import Card from "../../../../../components/Card/index";

const Cards = () => {
  return (
    <div className='w-full flex flex-wrap justify-around content-start items-center md:items-start flex-col md:flex-row gap-y-6 gap-x-4'>
      <Card
        preTitle='Want to know more about me?'
        title='Background'
        type='primary'
        maxWidth='max-w-3xl'
      >
        As a Systems Engineering student and self-taught full-stack developer, I
        bring 5 years of hands-on experience in crafting dynamic and responsive
        web applications. Specializing in React and Tailwind CSS for the
        frontend, and Express.js for the backend, I have a proven track record
        of building efficient and scalable solutions. My projects, including a
        comprehensive institutional web management system, highlight my ability
        to merge technical prowess with creative problem-solving. I am driven by
        a relentless passion for coding, an insatiable thirst for learning, and
        a unique ability to adapt and thrive in both solo and team environments.
        Eager to bring my skills to a forward-thinking company, I am ready to
        contribute and grow within a collaborative and innovative team.
      </Card>
      <Card
        preTitle='My presence in the web'
        title='Community Contributions'
        type='secondary'
        maxWidth='max-w-72'
      >
        Through the ForgePen Tales project, I plan to develop and share useful
        npm libraries and React components with the community, such as a
        Google-OAuth pre-built system and a GitHub-style Markdown text editor.
      </Card>
      <Card
        preTitle='About my education'
        title='Educational Background'
        type='third'
        maxWidth='max-w-xl'
      >
        As a Systems Engineering student and self-taught full-stack developer, I
        bring 5 years of hands-on experience in crafting dynamic and responsive
        web applications. Specializing in React and Tailwind CSS for the
        frontend, and Express.js for the backend, I have a proven track record
        of building efficient and scalable solutions. My projects, including a
        comprehensive institutional web management system, highlight my ability
        to merge technical prowess with creative problem-solving. I am driven by
        a relentless passion for coding, an insatiable thirst for learning, and
        a unique ability to adapt and thrive in both solo and team environments.
        Eager to bring my skills to a forward-thinking company, I am ready to
        contribute and grow within a collaborative and innovative team.
      </Card>
    </div>
  );
};

export default Cards;
