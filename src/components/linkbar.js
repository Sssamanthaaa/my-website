import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { GiHandBag } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function LinkBar() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="https://www.linkedin.com/in/samantha-flores-630292182/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className="theme-icon-button w-12 h-12 flex items-center justify-center rounded-full shadow transition"
      >
        <FaLinkedin className="text-xl" />
      </a>
      <a
        href="https://github.com/Sssamanthaaa"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className="theme-icon-button w-12 h-12 flex items-center justify-center rounded-full shadow transition"
      >
        <FaGithub className="text-xl" />
      </a>
      <a
        href="mailto:samantha.flores@berkeley.edu"
        title="Email me"
        className="theme-icon-button w-12 h-12 flex items-center justify-center rounded-full shadow transition"
      >
        <HiOutlineMail className="text-xl" />
      </a>
      <a
        href={`${process.env.PUBLIC_URL}/sf-resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        title="Resume"
        className="theme-icon-button w-12 h-12 flex items-center justify-center rounded-full shadow transition"
      >
        <FaFileAlt className="text-xl" />
      </a>
      <Link
        to="/google-fellowship"
        title="Google Fellowship"
        aria-label="Google Fellowship page"
        className="theme-icon-button w-12 h-12 flex items-center justify-center rounded-full shadow transition"
      >
        <GiHandBag className="text-xl" />
      </Link>
    </div>
  );
}
