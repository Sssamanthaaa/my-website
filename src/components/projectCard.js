import { useState, useEffect } from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import { LuLink, LuX } from "react-icons/lu";
import pinImg from "../images/clipart1055294.png";

export default function ProjectCard({
  title,
  icon,
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

  {/* close modal on ESC key */}
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
        {/* Polaroid body */}
        <div
          className={`
            relative mx-auto w-full max-w-[200px] 
            rounded-[14px] bg-white shadow-xl
            transition-transform duration-300
            hover:-translate-y-1 hover:rotate-0 hover:shadow-2xl
          `}
          style={{ transform: `rotate(${tilt}deg)`, fontFamily: "'Roboto', sans-serif" }}
        >
          {/* Thumbtack */}
          <img
            src={pinImg}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="absolute z-20 -top-5 left-1/2 w-8 h-auto -translate-x-1/2 rotate-[-18deg]
                       drop-shadow-lg pointer-events-none
                       transition-transform duration-200 group-hover:rotate-[-22deg] group-hover:scale-105"
          />
          {/* Shadow */}
          <span className="absolute z-10 top-[22px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black/25 blur-[2px]" />

          {/* Polaroid border */}
          <div className="relative z-0 rounded-[12px] border border-gray-200 p-3 pb-14">
            {/* Photo */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-gray-100">
              <img
                src={icon}
                alt={`${title} cover`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            {/* Caption */}
            <div className="absolute left-0 right-0 bottom-0 px-3 pb-3 pt-2">
              <div className="rounded-[8px] bg-white/90 border border-gray-200 px-3 py-2 text-center">
                <h3 className="text-sm font-medium text-gray-800 tracking-wide">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          {/* Glossy highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-white/40 to-transparent opacity-40" />
        </div>
      </button>

      {/* project deeper dive */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* background blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-[min(900px,92vw)] max-h-[88vh] overflow-auto rounded-2xl bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b sticky top-0 bg-white z-10">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <div className="flex items-center gap-2">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl border px-2 py-1 text-sm hover:bg-gray-50"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl border px-2 py-1 text-sm hover:bg-gray-50"
                  >
                    <LuLink className="w-4 h-4" />
                    Live site
                  </a>
                )}
                <button
                  className="p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <LuX className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Media */}
            <div className="p-5 pt-4">
              <div className="rounded-xl overflow-hidden bg-gray-100 max-w-xs mx-auto">
                <img
                  src={icon}
                  alt={`${title} preview`}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Description with subtitles */}
              <div className="mt-4 text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {intro && <div className="mb-3">{intro}</div>}
                {team && (
                  <div className="mb-3">
                    <div className="font-bold text-gray-700 mb-1">Team &amp; role</div>
                    <div>{team}</div>
                  </div>
                )}
                {technical && (
                  <div className="mb-3">
                    <div className="font-bold text-gray-700 mb-1">Technical implementation</div>
                    <div>{technical}</div>
                  </div>
                )}
                {challenges && (
                  <div className="mb-3">
                    <div className="font-bold text-gray-700 mb-1">Challenges</div>
                    <div>{challenges}</div>
                  </div>
                )}
                {strategy && (
                  <div className="mb-3">
                    <div className="font-bold text-gray-700 mb-1">Strategy</div>
                    <div>{strategy}</div>
                  </div>
                )}
                {presentation && (
                  <div className="mb-3">
                    <div className="font-bold text-gray-700 mb-1">Presentation &amp; demos</div>
                    <div>{presentation}</div>
                  </div>
                )}
                {outcome && (
                  <div className="mb-3">
                    <div className="font-bold text-gray-700 mb-1">Outcome</div>
                    <div>{outcome}</div>
                  </div>
                )}
              </div>
              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                {video && (
                  <a
                    href={video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border px-3 py-2 text-sm"
                  >
                    <FaVideo className="w-4 h-4" />
                    Demo video
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
