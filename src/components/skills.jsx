import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Skills() {
  return (
<div id="skills" className="mb-20  flex flex-wrap justify-center items-center mt-20">
  <span className="text-4xl sm:text-5xl text-text-zinc-800 transition-colors hover:text-[#2465F1] border border-b-4 border-black bg-[#f9f6ee] rounded-xl p-5 sm:p-7 m-2 transition-shadow shadow-xl">
    <FaCss3 />
  </span>
  <span className="text-4xl sm:text-5xl text-text-zinc-800 transition-colors hover:text-[#DC4A25] border border-b-4 border-black bg-[#f9f6ee] rounded-xl p-5 sm:p-7 m-2 transition-shadow shadow-xl">
    <FaHtml5 />
  </span>
  <span className="text-4xl sm:text-5xl text-zinc-800 transition-colors hover:text-[#37BCF8]  border border-b-4 border-black bg-[#f9f6ee] rounded-xl p-5 sm:p-7 m-2 transition-shadow shadow-xl">
    <FaReact />
  </span>
  <span className="text-4xl sm:text-5xl text-text-zinc-800 transition-colors hover:text-[#37BCF8] border border-b-4 border-black bg-[#f9f6ee] rounded-xl p-5 sm:p-7 m-2 transition-shadow shadow-xl">
    <SiTailwindcss />
  </span>
  <span className="text-4xl sm:text-5xl text-text-zinc-800 transition-colors hover:text-yellow-500 border border-b-4 border-black  bg-[#f9f6ee] rounded-xl p-5 sm:p-7 m-2 transition-shadow shadow-xl">
    <IoLogoJavascript />
  </span>
</div>

  );
}

export default Skills;
