import { useEffect, useRef } from "react";
import { FaRedoAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../GoogleFellowship.css";
import appleImg from "../images/google-img/apple.png";
import glassesImg from "../images/google-img/glasses.png";
import headphonesImg from "../images/google-img/headphones.png";
import laptopImg from "../images/google-img/laptop.png";
import notebookImg from "../images/google-img/notebook.png";
import purseImg from "../images/google-img/purse.png";
import robotImg from "../images/google-img/robot.png";

export default function GoogleFellowship() {
  const pageRef = useRef(null);

  useEffect(() => {
    const pageRoot = pageRef.current;

    if (!pageRoot) {
      return undefined;
    }

    const trigger = pageRoot.querySelector("#spillTrigger");
    const resetItemsBtn = pageRoot.querySelector("#resetItemsBtn");
    const purseStage = pageRoot.querySelector(".purse-stage");
    const spillArea = pageRoot.querySelector(".spill-area");
    const items = [...pageRoot.querySelectorAll(".item-wrapper")];

    if (!trigger || !resetItemsBtn || !purseStage || !spillArea || items.length === 0) {
      return undefined;
    }

    let hasSpilled = false;

    function stackItemsAtPurse() {
      const purseRect = trigger.getBoundingClientRect();
      const areaRect = spillArea.getBoundingClientRect();
      const startX = purseRect.left + purseRect.width * 0.72 - areaRect.left;
      const startY = purseRect.top + purseRect.height * 0.72 - areaRect.top;

      items.forEach((item, index) => {
        item.style.left = `${startX}px`;
        item.style.top = `${startY}px`;
        item.style.opacity = "0";
        const stackScale = item.dataset.stackScale || "0.2";
        item.style.transform = `translate(-50%, -50%) scale(${stackScale}) rotate(${index * 6}deg)`;
      });
    }

    function spillItems() {
      if (hasSpilled) return;
      hasSpilled = true;

      pageRoot.classList.remove("reset-ready");
      pageRoot.classList.add("is-starting");

      window.setTimeout(() => {
        trigger.classList.add("is-tilted");
        pageRoot.classList.add("spilled");
        spillArea.classList.add("is-spilled");

        const leftToRight = [...items].sort(
          (a, b) => parseFloat(a.dataset.x) - parseFloat(b.dataset.x)
        );

        leftToRight.forEach((item, index) => {
          const delay = index * 260;
          item.style.transitionDelay = `${delay}ms`;
          item.style.setProperty("--drop-delay", `${delay + 1200}ms`);
          item.style.left = item.dataset.x;
          item.style.top = item.dataset.y;
          item.style.opacity = "1";
          const finalScale = item.dataset.scale || "1";
          item.style.transform = `translate(-50%, -50%) scale(${finalScale}) rotate(${item.dataset.rot}deg)`;
        });
      }, 220);
    }

    function resetItemsToBag() {
      if (!hasSpilled) return;
      trigger.classList.remove("is-tilted");
      spillArea.classList.remove("is-spilled");
      pageRoot.classList.remove("spilled");
      pageRoot.classList.remove("is-starting");
      pageRoot.classList.remove("reset-ready");
      stackItemsAtPurse();
      hasSpilled = false;
    }

    function handleResize() {
      if (!hasSpilled) stackItemsAtPurse();
    }

    function handleAnimationEnd(event) {
      if (event.animationName === "bagTravel" && hasSpilled) {
        pageRoot.classList.add("reset-ready");
      }
    }

    stackItemsAtPurse();
    window.addEventListener("resize", handleResize);
    purseStage.addEventListener("animationend", handleAnimationEnd);
    trigger.addEventListener("click", spillItems);
    trigger.addEventListener("touchstart", spillItems, { passive: true });
    resetItemsBtn.addEventListener("click", resetItemsToBag);

    return () => {
      window.removeEventListener("resize", handleResize);
      purseStage.removeEventListener("animationend", handleAnimationEnd);
      trigger.removeEventListener("click", spillItems);
      trigger.removeEventListener("touchstart", spillItems);
      resetItemsBtn.removeEventListener("click", resetItemsToBag);
      pageRoot.classList.remove("spilled", "is-starting", "reset-ready");
    };
  }, []);

  return (
    <div ref={pageRef} className="google-fellowship-page">
      <Link to="/" className="home-btn">
        Back to Home
      </Link>

      <header>
        <h1>Things I Carry With Me</h1>
        <p className="subtitle">A digital spill of the tools, toys, and curiosities that shape how I build.</p>
      </header>

      <section className="purse-stage">
        <button id="spillTrigger" className="purse-btn" aria-label="Open purse and spill items">
          <img src={purseImg} alt="Purse" className="purse-img" />
        </button>
        <p className="spill-hint">Tap the purse to spill everything out.</p>
      </section>

      <button id="resetItemsBtn" className="reset-btn" type="button">
        <FaRedoAlt aria-hidden="true" />
        <span className="sr-only">Put Items Back</span>
      </button>

      <main className="spill-area">
        <div className="item-wrapper laptop" data-x="90%" data-y="58%" data-rot="-4" data-scale="1" data-stack-scale="0.2">
          <img
            src={laptopImg}
            alt="Laptop"
            className="icon-img laptop-img"
            style={{ width: "min(40vw, 520px)", maxWidth: "none" }}
          />
          <div className="story-popup">
            My portable workshop. It's where my engineering background meets a "builder" itch that never quite
            goes away, turning abstract logic into tangible tools.
          </div>
        </div>

        <div className="item-wrapper headphones" data-x="18%" data-y="90%" data-rot="8">
          <img src={headphonesImg} alt="Headphones" className="icon-img" />
          <div className="story-popup">
            My favorite pair for deep listening. I've found that the best solutions don't come from talking louder,
            but from tuning into the quietest parts of a problem.
          </div>
        </div>

        <div className="item-wrapper robot" data-x="90%" data-y="20%" data-rot="12">
          <img
            src={robotImg}
            alt="Robot"
            className="icon-img"
            style={{ width: "min(13vw, 230px)", maxWidth: "none" }}
          />
          <div className="story-popup">
            A relic from my combat robotics days. Whether designing bots or writing the curriculum to help others
            build them, I've always loved a little mechanical chaos.
          </div>
        </div>

        <div className="item-wrapper notebook" data-x="82%" data-y="90%" data-rot="-8">
          <img
            src={notebookImg}
            alt="Notebook"
            className="icon-img"
            style={{ width: "min(18vw, 260px)", maxWidth: "none" }}
          />
          <div className="story-popup">
            Where Figma wireframes begin as messy sketches. It's my space for design thinking and the "what ifs" I
            gathered from my favorite design electives.
          </div>
        </div>

        <div className="item-wrapper apple" data-x="10%" data-y="20%" data-rot="-12">
          <img src={appleImg} alt="Apple" className="icon-img" />
          <div className="story-popup">
            A nod to my roots in STEM ed. From AI-driven teaching environments to custom curricula, I'm driven by
            making the "aha!" moment accessible to every student.
          </div>
        </div>

        <div className="item-wrapper glasses" data-x="4%" data-y="58%" data-rot="4">
          <img src={glassesImg} alt="Glasses" className="icon-img" />
          <div className="story-popup">
            For a sharper focus on the overlooked. I wear these to bring fresh perspectives into tech, ensuring
            innovation isn't just fast, but inclusive and accessible. I also genuinely need them :)
          </div>
        </div>
      </main>

      <footer>
        Curated with a touch of digital wit by Gemini.
      </footer>
    </div>
  );
}
