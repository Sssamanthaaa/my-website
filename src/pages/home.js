import { useEffect, useMemo, useRef, useState } from "react";
import { ReactComponent as HomePageScene } from "../images/HOME-PAGE.svg";
import "./home.css";

const ENTRY_OFFSETS = {
  header: { x: -220, y: 0 },
  name: { x: 220, y: 0 },
  me: { x: 0, y: 220 },
  pill: { x: 0, y: -220 },
  pinkRect: { x: 0, y: -140 },
  greyRect: { x: 0, y: 140 },
};

const SCROLL_TARGET_OFFSETS = {
  header: { x: -260, y: 0 },
  name: { x: 260, y: 0 },
  me: { x: 0, y: 230 },
  pill: { x: 0, y: -230 },
  pinkRect: { x: 0, y: -165 },
  greyRect: { x: 0, y: 165 },
};

const SCROLL_START_RATIO = 0.995;
const SCROLL_FULL_RATIO = 0.78;
const OBSERVER_THRESHOLDS = [
  0.75, 0.8, 0.85, 0.9, 0.93, 0.96, 0.98, 0.99, 0.995, 1,
];

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const toTranslate3d = (x, y) => `translate3d(${x}px, ${y}px, 0)`;

export default function Home() {
  const sectionRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Start the entrance animation on the first paint frame.
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    // Convert home section visibility into a smooth 0..1 scroll progress.
    const observer = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;
      const rawProgress =
        (SCROLL_START_RATIO - ratio) / (SCROLL_START_RATIO - SCROLL_FULL_RATIO);
      setScrollProgress(clamp(rawProgress, 0, 1));
    }, { threshold: OBSERVER_THRESHOLDS });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const sceneStyle = useMemo(() => {
    const p = scrollProgress;
    return {
      "--header-enter-transform": toTranslate3d(
        ENTRY_OFFSETS.header.x,
        ENTRY_OFFSETS.header.y
      ),
      "--name-enter-transform": toTranslate3d(
        ENTRY_OFFSETS.name.x,
        ENTRY_OFFSETS.name.y
      ),
      "--me-enter-transform": toTranslate3d(
        ENTRY_OFFSETS.me.x,
        ENTRY_OFFSETS.me.y
      ),
      "--pill-enter-transform": toTranslate3d(
        ENTRY_OFFSETS.pill.x,
        ENTRY_OFFSETS.pill.y
      ),
      "--pink-enter-transform": toTranslate3d(
        ENTRY_OFFSETS.pinkRect.x,
        ENTRY_OFFSETS.pinkRect.y
      ),
      "--grey-enter-transform": toTranslate3d(
        ENTRY_OFFSETS.greyRect.x,
        ENTRY_OFFSETS.greyRect.y
      ),

      "--shell-opacity": `${0.98 - 0.1 * p}`,
      "--shell-transform": `translateY(${28 * p}px)`,

      "--header-scroll-transform": toTranslate3d(
        SCROLL_TARGET_OFFSETS.header.x * p,
        SCROLL_TARGET_OFFSETS.header.y * p
      ),
      "--name-scroll-transform": toTranslate3d(
        SCROLL_TARGET_OFFSETS.name.x * p,
        SCROLL_TARGET_OFFSETS.name.y * p
      ),
      "--me-scroll-transform": toTranslate3d(
        SCROLL_TARGET_OFFSETS.me.x * p,
        SCROLL_TARGET_OFFSETS.me.y * p
      ),
      "--pill-scroll-transform": toTranslate3d(
        SCROLL_TARGET_OFFSETS.pill.x * p,
        SCROLL_TARGET_OFFSETS.pill.y * p
      ),
      "--pink-scroll-transform": toTranslate3d(
        SCROLL_TARGET_OFFSETS.pinkRect.x * p,
        SCROLL_TARGET_OFFSETS.pinkRect.y * p
      ),
      "--grey-scroll-transform": toTranslate3d(
        SCROLL_TARGET_OFFSETS.greyRect.x * p,
        SCROLL_TARGET_OFFSETS.greyRect.y * p
      ),
    };
  }, [scrollProgress]);

  return (
    <section
      ref={sectionRef}
      className="theme-bg relative h-screen w-full overflow-hidden pt-24 md:pt-32"
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 md:px-8">
        <div className={`home-scene-shell ${entered ? "entered" : ""}`} style={sceneStyle}>
          <HomePageScene
            role="img"
            aria-label="Samantha Flores homepage scene"
            className="home-play-scene"
          />
        </div>
      </div>
    </section>
  );
}
