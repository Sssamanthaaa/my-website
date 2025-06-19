import { useState, useEffect, useRef } from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

export default function ProjectCard({ title, description, icon, github, link, video }) {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      const isClamped = el.scrollHeight > el.clientHeight;
      setShowToggle(isClamped);
    }
  }, [description]);

  const toggleExpanded = () => setExpanded(prev => !prev);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full flex flex-col transition-all duration-300">
      <div className="flex items-start space-x-6 mb-4">
        <div className="flex-shrink-0">
          <img src={icon} alt="project icon" className="w-16 h-16" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p
            ref={textRef}
            className={`text-gray-600 text-sm leading-relaxed ${expanded ? "" : "line-clamp-3"}`}
          >
            {description}
          </p>
          {showToggle && (
            <button
              onClick={toggleExpanded}
              className="text-blue-600 text-xs mt-1 hover:underline"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-2">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5 text-gray-700 hover:text-black" />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <LuLink className="w-5 h-5 text-gray-700 hover:text-black" />
          </a>
        )}
        {video && (
          <a href={video} target="_blank" rel="noopener noreferrer">
            <FaVideo className="w-5 h-5 text-gray-700 hover:text-black" />
          </a>
        )}
      </div>
    </div>
  );
}
