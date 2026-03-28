import { motion } from "framer-motion";
import AboutTerminal from '../components/terminal.js';

export default function AboutMe() {
  return (
    <section className="theme-surface min-h-screen pt-32 px-10 md:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutTerminal />
        </motion.div>
      </div>
    </section>
  );
}
