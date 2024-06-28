import {
  AcademicCapIcon,
  ArrowPathIcon,
  ChatBubbleLeftEllipsisIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { cloneElement } from "react";

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

const SoftSkills = () => {
  return (
    <section className='max-w-sm'>
      <h2 className='flex items-center justify-center w-fit text-sm bg-stone-400 dark:bg-stone-950 py-1 px-4 ml-12 h-8 font-azeret-mono text-lime-100 dark:text-lime-100 rounded-t-lg shadow-inner'>
        Soft Skills
      </h2>
      <div className='bg-stone-200 dark:bg-stone-800 px-8 md:rounded-md'>
        <ol className='relative border-s border-stone-400 dark:border-stone-600 py-4'>
          {softSkills.map(({ skill, icon, description }) => (
            <li key={skill} className='py-5 ms-4'>
              <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700' />
              <h3 className='flex gap-2 text-lg font-semibold'>
                {cloneElement(icon, { className: "w-6" })}
                {skill}
              </h3>
              <p className='text-base font-normal'>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SoftSkills;
