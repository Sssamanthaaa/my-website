import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaVideo, FaPlay } from "react-icons/fa";
import { LuLink, LuX } from "react-icons/lu";
import pinImg from "../images/clipart1055294.png";

// Video player — play button overlay + progress bar driven by actual currentTime
function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-900 mx-auto" style={{ aspectRatio: "9/16" }}>
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        playsInline
      />

      {/* Play button overlay — disappears once playing */}
      {!playing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55">
          <button
            onClick={handlePlay}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
            aria-label="Play demo"
          >
            <FaPlay className="w-5 h-5 text-gray-800 ml-1" />
          </button>
          <p className="mt-2 text-white text-xs font-medium tracking-wide opacity-80">Press to play</p>
        </div>
      )}

      {/* Progress bar — tracks actual video playback */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
        <div className="h-full bg-pink-500" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

// Category chip color map
const categoryColors = {
  "Robotics":  "bg-blue-100 text-blue-700",
  "UI/UX":     "bg-pink-100 text-pink-700",
  "Security":  "bg-green-100 text-green-700",
  "Mobile":    "bg-purple-100 text-purple-700",
};

export default function ProjectCard({
  title,
  category,
  tags,
  icon,
  preview,
  modalLogo,
  github,
  link,
  video,
  tilt,
  intro,
  team,
  technical,
  challenges,
  strategy,
  presentation,
  outcome,
}) {
  const [open, setOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Polaroid tile */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full focus:outline-none"
        aria-haspopup="dialog"
        aria-label={`${title} details`}
      >
        <div
          className="theme-body relative mx-auto w-full max-w-[200px] rounded-[14px] bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-2xl"
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          {/* Thumbtack */}
          <img
            src={pinImg}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="absolute z-20 -top-5 left-1/2 w-8 h-auto -translate-x-1/2 rotate-[-18deg] drop-shadow-lg pointer-events-none transition-transform duration-200 group-hover:rotate-[-22deg] group-hover:scale-105"
          />
          {/* Thumbtack shadow */}
          <span className="absolute z-10 top-[22px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black/25 blur-[2px]" />

          {/* Polaroid border */}
          <div className="relative z-0 rounded-[12px] border border-gray-200 p-3 pb-20">
            {/* Photo */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-gray-100">
              <img
                src={icon}
                alt={`${title} cover`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Caption — title + category chip */}
            <div className="absolute left-0 right-0 bottom-0 px-3 pb-3 pt-2">
              <div className="rounded-[8px] bg-white/90 border border-gray-200 px-3 py-2 text-center">
                <h3 className="text-sm font-medium text-gray-800 tracking-wide">{title}</h3>
                {category && (
                  <span className={`mt-1 inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[category] ?? "bg-gray-100 text-gray-600"}`}>
                    {category}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Glossy highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-white/40 to-transparent opacity-40" />
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Modal panel */}
            <motion.div
              className="relative z-10 w-[min(1100px,96vw)] max-h-[92vh] overflow-auto rounded-2xl bg-white shadow-xl"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b sticky top-0 bg-white z-10">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1">
                    {category && (
                      <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[category] ?? "bg-gray-100 text-gray-600"}`}>
                        {category}
                      </span>
                    )}
                    {tags && tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl border px-2 py-1 text-sm hover:bg-gray-50">
                      <FaGithub className="w-4 h-4" /> GitHub
                    </a>
                  )}
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl border px-2 py-1 text-sm hover:bg-gray-50">
                      <LuLink className="w-4 h-4" /> Live site
                    </a>
                  )}
                  <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)} aria-label="Close">
                    <LuX className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Two-column body */}
              <div className="p-5 flex flex-col md:flex-row gap-6">

                {/* Left — image(s) */}
                <div className="flex-shrink-0 md:w-80">
                  {/* If project has a modalLogo, show it above the gif player */}
                  {modalLogo && (
                    <div className="rounded-xl overflow-hidden bg-gray-100 mb-3">
                      <img src={modalLogo} alt={`${title} logo`} className="w-full h-auto object-contain p-3" />
                    </div>
                  )}
                  {/* Gif player if preview exists, otherwise fall back to icon */}
                  <div className="rounded-xl overflow-hidden bg-gray-100">
                    {preview
                      ? <VideoPlayer src={preview} />
                      : <img src={icon} alt={`${title} preview`} className="w-full h-auto object-cover" />
                    }
                  </div>
                  {/* Demo video link */}
                  {video && (
                    <a href={video} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 border px-3 py-2 text-sm rounded-lg hover:bg-gray-50 w-full justify-center">
                      <FaVideo className="w-4 h-4" /> Demo video
                    </a>
                  )}
                </div>

                {/* Right — text content */}
                <div className="theme-body flex-1 text-gray-700 leading-relaxed space-y-3">
                  {intro && <p>{intro}</p>}
                  {team && (
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Team &amp; role</p>
                      <p>{team}</p>
                    </div>
                  )}
                  {technical && (
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Technical implementation</p>
                      <p>{technical}</p>
                    </div>
                  )}
                  {challenges && (
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Challenges</p>
                      <p>{challenges}</p>
                    </div>
                  )}
                  {strategy && (
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Strategy</p>
                      <p>{strategy}</p>
                    </div>
                  )}
                  {presentation && (
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Presentation &amp; demos</p>
                      <p>{presentation}</p>
                    </div>
                  )}
                  {outcome && (
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Outcome</p>
                      <p>{outcome}</p>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
