import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frame1 from "../images/Frame 18.png";
import frame2 from "../images/Frame 18-1.png";
import frame3 from "../images/Frame 18-2.png";
import frame4 from "../images/Frame 18-3.png";
import flash from "../images/9361730.png";

const steps = [
  {
    title: "Hi, I'm Samantha!",
    text: "I was born and raised in Oakland, California. I am a first-gen college graduate from UC Berkeley in Electrical Engineering and Computer Science. I am highly interested in robotics and user interface (UI) design. I am currently in search of a full-time position as a software engineer in a place that fosters innovation and creativity. I enjoy working with others and want to find a place where collaboration is encouraged.",
    image: frame1,
  },
  {
    title: "Robotics",
    text: "I am super grateful that I found the robotics community at UC Berkeley. College can be overwhelming and a never-ending cycle of readings and study sessions, but it was through robotics that I got hands-on experience. I participated in combat robotics with an amazing club on campus called Robobears. I got the opportunity to travel to New York for the first time and fight robots, two of my lifelong goals! I was given the opportunity to be a facilitator for a class about manufacturing and designing robots for three years, and was the president of the robotics club for 2 years. I also got to work on big industry-standard robots during one of my favorite classes at Cal called 106a 🦾.",
    image: frame2,
  },
  {
    title: "Teaching",
    text: "Within my four years at UC Berkeley, I have taught STEM-related courses to both high school and college students. I love being an engineer, and it is through education that I have the power to motivate younger generations that engineering is for everyone, regardless of their background. Getting your code to work after hours of debugging is such a rewarding feeling, but seeing that through the eyes of a high schooler has been so inspirational. But most importantly, I am passionate about creating a space for women of color to prosper in STEM. ❤️",
    image: frame3,
  },
  {
    title: "Me",
    text: "I like to believe that I am more than just who I am at school and work, although my family begs to differ lol. I love going on hikes ⛰ and trying new food spots in the Bay Area, which is the best place to live for a foodie like me. I love spending time with my dog Nova, who is the most spoiled dog ever! 🐾 Most importantly, I am a big family person. I am the eldest of 3 and have a big Hispanic family 🇲🇽, so we are always celebrating someone's birthday!",
    image: frame4,
  },
];

function BlinkingCursor() {
  return (
    <motion.span
      className="inline-block w-[2px] h-[1em] bg-green-400 ml-1 align-middle"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: "steps(1)" }}
    />
  );
}

export default function AboutTerminal() {
  const [stepIndex, setStepIndex] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const [direction, setDirection] = useState(1);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const flashThen = (nextIndex) => {
    const dir = nextIndex > stepIndex ? 1 : -1;
    setShowFlash(true);
    setTimeout(() => {
      setShowFlash(false);
      setDirection(dir);
      setStepIndex(nextIndex);
    }, 280);
  };

  const handleNext = () => {
    if (stepIndex < steps.length - 1) flashThen(stepIndex + 1);
  };

  const handleBack = () => {
    if (stepIndex > 0) flashThen(stepIndex - 1);
  };

  const current = steps[stepIndex];

  useEffect(() => {
    const title = current.title;
    const body = current.text;
    const TITLE_SPEED_MS = 28;
    const BODY_SPEED_MS = 7;
    let cancelled = false;
    let timer;

    setTypedTitle("");
    setTypedText("");
    setIsTyping(true);

    const typeBody = (index) => {
      if (cancelled) return;

      const next = index + 1;
      setTypedText(body.slice(0, next));
      if (next >= body.length) {
        setIsTyping(false);
        return;
      }

      timer = window.setTimeout(() => typeBody(next), BODY_SPEED_MS);
    };

    const typeTitle = (index) => {
      if (cancelled) return;

      const next = index + 1;
      setTypedTitle(title.slice(0, next));
      if (next >= title.length) {
        timer = window.setTimeout(() => typeBody(0), 130);
        return;
      }

      timer = window.setTimeout(() => typeTitle(next), TITLE_SPEED_MS);
    };

    timer = window.setTimeout(() => typeTitle(0), 120);

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [current.title, current.text]);

  const contentVariants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 14 : -14 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, y: dir > 0 ? -14 : 14, transition: { duration: 0.2 } }),
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
      {/* Terminal */}
      <div className="bg-black text-white rounded-2xl shadow-2xl w-full max-w-xl font-mono text-base leading-relaxed overflow-hidden flex flex-col" style={{ minHeight: 480 }}>

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-3 text-xs text-zinc-500 tracking-widest">about.samantha — bash</span>
        </div>

        {/* Content area */}
        <div className="flex-1 p-6 overflow-hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={stepIndex}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Prompt line */}
              <p className="mb-3">
                <span className="text-green-400">samantha@berkeley:~$</span>{" "}
                <span className="text-pink-300">{typedTitle}</span>
                {typedTitle.length < current.title.length && <BlinkingCursor />}
              </p>
              {/* Body text */}
              <p className="text-gray-300 leading-7 text-sm">
                {typedText}
                {!isTyping && <BlinkingCursor />}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer — step dots + nav */}
        <div className="px-6 pb-5 flex items-center justify-between border-t border-zinc-800 pt-4">
          {/* Step dots */}
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => i !== stepIndex && flashThen(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === stepIndex ? "bg-pink-400 w-5" : "bg-zinc-600 hover:bg-zinc-400"
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow nav */}
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              disabled={stepIndex === 0}
              className="text-lg px-3 py-1 rounded-lg text-pink-300 hover:text-pink-400 hover:bg-zinc-800 transition disabled:opacity-20 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={stepIndex === steps.length - 1}
              className="text-lg px-3 py-1 rounded-lg text-pink-300 hover:text-pink-400 hover:bg-zinc-800 transition disabled:opacity-20 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Camera image with flash */}
      <div className="relative flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={stepIndex}
            src={current.image}
            alt="Camera Frame"
            className="w-[420px] object-cover rotate-[6deg]"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </AnimatePresence>
        {showFlash && (
          <img
            src={flash}
            alt="Flash"
            className="absolute bottom-40 left-50 w-30 h-30 transition-opacity duration-200"
          />
        )}
      </div>
    </div>
  );
}
