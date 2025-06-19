import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function LinkBar() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="https://www.linkedin.com/in/samantha-flores-630292182/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full shadow hover:bg-pink-600 transition"
      >
        <FaLinkedin className="text-xl" />
      </a>
      <a
        href="https://github.com/Sssamanthaaa"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full shadow hover:bg-pink-600 transition"
      >
        <FaGithub className="text-xl" />
      </a>
      <a
        href="mailto:samantha.flores@berkeley.edu"
        className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full shadow hover:bg-pink-600 transition"
      >
        <HiOutlineMail className="text-xl" />
      </a>
    </div>
  );
}
