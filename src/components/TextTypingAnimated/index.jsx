import { useEffect, useState } from "react";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const phrases = [
  "HieloElemental",
  "a FullStack Web Developer",
  "a MERN Stack Relational Developer",
];

const TextTypingAnimated = () => {
  const [phrase, setPhrase] = useState("");
  const [isWiriting, setIsWritting] = useState(true);
  const [curWordIndex, setCurWordIndex] = useState(0);

  useEffect(() => {
    let curWord = phrases[curWordIndex];
    if (isWiriting) {
      if (phrase.length < curWord.length) {
        sleep(150).then(() => {
          setPhrase(phrase + curWord[phrase.length]);
        });
      } else {
        sleep(2000).then(() => {
          setIsWritting(false);
        });
      }
    } else {
      if (phrase.length > 0) {
        sleep(50).then(() => {
          setPhrase(phrase.slice(0, -1));
        });
      } else {
        setCurWordIndex((curWordIndex + 1) % phrases.length);
        setIsWritting(true);
        setPhrase("");
      }
    }
  }, [curWordIndex, phrase, isWiriting]);

  return (
    <p className='bg-stone-200 bg-opacity-60 dark:bg-stone-800 dark:bg-opacity-30 rounded-lg px-4 min-w-fit text-center font-azeret-mono font-normal text-xl md:text-5xl'>
      I&apos;m{" "}
      <span className='font-semibold text-green-800 dark:text-lime-400'>
        {phrase}
      </span>
      <span className='border-l-4 border-green-800 dark:border-lime-400 animate-blink' />
    </p>
  );
};

export default TextTypingAnimated;
