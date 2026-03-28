import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  // Three layers at different speeds — the lag between them creates the water/ripple feel
  const x1 = useSpring(mx, { stiffness: 700, damping: 40 });
  const y1 = useSpring(my, { stiffness: 700, damping: 40 });

  const x2 = useSpring(mx, { stiffness: 200, damping: 25 });
  const y2 = useSpring(my, { stiffness: 200, damping: 25 });

  const x3 = useSpring(mx, { stiffness: 65, damping: 16 });
  const y3 = useSpring(my, { stiffness: 65, damping: 16 });

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  const base = "fixed top-0 left-0 pointer-events-none z-[9999] rounded-full";

  return (
    <>
      {/* Outer ring — slowest, most glassy */}
      <motion.div
        className={base}
        style={{ x: x3, y: y3, translateX: "-50%", translateY: "-50%" }}
      >
        <div style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          border: "1.5px solid rgba(255, 182, 209, 0.45)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(255, 255, 255, 0.06)",
          boxShadow: "0 0 18px rgba(255,182,209,0.12), inset 0 1px 0 rgba(255,255,255,0.25)",
        }} />
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className={base}
        style={{ x: x2, y: y2, translateX: "-50%", translateY: "-50%" }}
      >
        <div style={{
          width: 26,
          height: 26,
          borderRadius: "50%",
          border: "1px solid rgba(255, 182, 209, 0.6)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          background: "rgba(255, 255, 255, 0.1)",
        }} />
      </motion.div>

      {/* Inner dot — fastest, solid pink */}
      <motion.div
        className={base}
        style={{ x: x1, y: y1, translateX: "-50%", translateY: "-50%" }}
      >
        <div style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "rgb(236, 72, 153)",
          boxShadow: "0 0 8px rgba(236, 72, 153, 0.75)",
        }} />
      </motion.div>
    </>
  );
}
