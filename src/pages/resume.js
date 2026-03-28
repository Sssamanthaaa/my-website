import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="theme-surface min-h-screen pt-32 px-10 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="theme-heading text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          My Resume
        </motion.h2>

        {/* Embed PDF in an iframe */}
        <motion.iframe
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.1 }}
          src={`${process.env.PUBLIC_URL}/sf-resume.pdf`}
          width="100%"
          style={{ height: 'calc(100vh - 300px)' }}
          title="Resume PDF"
          className="border rounded shadow-md"
        />

        {/* Link to download/open in new tab */}
        <div className="mt-6">
          <a
            href={`${process.env.PUBLIC_URL}/sf-resume.pdf`}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="theme-primary-button inline-block px-6 py-3 rounded-full transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
