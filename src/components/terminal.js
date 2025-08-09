import { useState } from "react";
import frame1 from "../images/Frame 18.png";
import frame2 from "../images/Frame 18-1.png";
import frame3 from "../images/Frame 18-2.png";
import frame4 from "../images/Frame 18-3.png";
import flash from "../images/9361730.png"



const steps = [
  {
    title: "Hi, I'm Samantha!",
    text: "I was born and raised in Oakland, California.I am a first-gen college graduate from UC Berkeley in Electrical Engineering and Computer Science. I am highly interested in robotics and user interface (UI) design.  I am currently in search of a full-time position as a software engineer in a place that fosters innovation and creativity.I enjoy working with others and want to find a place where collaboration is encouraged.",
    image: frame1
  },
  {
    title: "Robotics",
    text: "I am super grateful that I found the robotics community at UC Berkeley. College can be overwhelming and a never-ending cycle of readings and study sessions, but it was through robotics that I got hands-on experience. I participated in combat robotics with an amazing club on campus called Robobears. I got the opportunity to travel to New York for the first time and fight robots, two of my lifelong goals! I was given the opportunity to be a facilitator for a class about manufacturing and designing robots for three years, and was the president of the robotics club for 2 years. I also got to work on big industry-standard robots during one of my favorite classes at Cal called 106a 🦾.",
    image: frame2
  },
  {
    title: "Teaching",
    text: "Within my four years at UC Berkeley, I have taught STEM-related courses to both high school and college students. I love being an engineer, and it is through education that I have the power to motivate younger generations that engineering is for everyone, regardless of their background. Getting your code to work after hours of debugging is such a rewarding feeling, but seeing that through the eyes of a high schooler has been so inspirational. But most importantly, I am passionate about creating a space for women of color to prosper in STEM. ❤️",
    image: frame3
  },
{
    title: "Me",
    text: "I like to believe that I am more than just who I am at school and work, although my family begs to differ lol. I love going on hikes ⛰ and trying new food spots in the Bay Area, which is the best place to live for a foodie like me. I love spending time with my dog Nova, who is the most spoiled dog ever!🐾 Most importantly, I am a big family person. I am the eldest of 3 and have a big Hispanic family 🇲🇽, so we are always celebrating someone's birthday!",
    image: frame4
  }
  
];

export default function AboutTerminal() {
  const [stepIndex, setStepIndex] = useState(0);
  const [showFlash, setShowFlash] = useState(false);

  const currentStep = steps[stepIndex];

  const flashThen = (updateStepIndexFn) => {
    setShowFlash(true);
    setTimeout(() => {
      setShowFlash(false);
      updateStepIndexFn();
    }, 300);
  };

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      flashThen(() => setStepIndex((prev) => prev + 1));
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      flashThen(() => setStepIndex((prev) => prev - 1));
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
      {/* Terminal */}
    <div className="bg-black text-white rounded-2xl shadow-lg p-6 w-full max-w-xl font-mono text-lg leading-relaxed space-y-4 h-[600px] overflow-y-auto">
        {/* Terminal Header */}
        <div className="flex space-x-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Terminal Text */}
        <p>
          <span className="text-green-400">computer:~$</span> {currentStep.title}
        </p>
        <p>{currentStep.text}</p>

        {/* Arrow Buttons */}
        <div className="flex justify-between mt-6">
          {stepIndex > 0 ? (
            <button
              onClick={handleBack}
              className="text-pink-200 text-2xl hover:text-pink-400 transition"
            >
              &#8592;
            </button>
          ) : (
            <span></span>
          )}
          {stepIndex < steps.length - 1 && (
            <button
              onClick={handleNext}
              className="text-pink-200 text-2xl hover:text-pink-400 transition"
            >
              &#8594;
            </button>
          )}
        </div>
      </div>

      {/* Camera Image with Flash in Corner */}
      <div className="relative">
        <img
          src={currentStep.image}
          alt="Camera Frame"
          className="w-[500px] object-cover rotate-[6deg]"
        />
        {showFlash && (
          <img
            src={flash}
            alt="Flash"
            className="absolute bottom-40 left-50 w-30 h-30  transition-opacity duration-200"
          />
        )}
      </div>
    </div>
  );
}