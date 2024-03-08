import { FaTelegramPlane } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

function MainSec() {
  return (
    <div id="home" className="  w-full mx-auto mt-20 items-center text-center ">
      <div className="space-y-10 ">
        <h1 className="text-[55px] sm:text-7xl text-black/90  lg:text-8xl xl:text-7xl font-bold">
          I'M Matin Hosseini
        </h1>
        <h2 className="font-bold text-xl sm:text-2xl text-black/90  lg:text-3xl xl:text-3xl">
          I'm Front End Developer | Content Creator
        </h2>

        <div className="flex flex-wrap justify-center items-center space-x-5 w-full">
          <button  className="border border-black bg-[#f9f6ee] hover:bg-[#c5001a] transition-colors hover:text-white border-b-4 w-40 h-10 rounded-3xl">
            <a href="#contact">Call With Me</a>
          </button>
          <span class="block border border-black/50 h-6 rounded-md me-4 xs:me-5"></span>
          <span className="flex justify-center items-center text-2xl sm:text-3xl text-white bg-[#c5001a] rounded-full p-2 sm:p-3 hover:shadow-xl transition-shadow shadow-lg w-12 sm:w-16 h-12 sm:h-16">
            <a href="https://t.me/MatinHosseiniOfficial" target="blank_">
              <FaTelegramPlane />
            </a>
          </span>
          <span className="flex justify-center items-center text-2xl sm:text-3xl text-white bg-[#c5001a] rounded-full p-2 sm:p-3 hover:shadow-xl transition-shadow shadow-lg w-12 sm:w-16 h-12 sm:h-16">
            <a href="https://www.youtube.com/channel/UCo8ESfIUQFQuRNOagGvHPow" target="blank_">

              <TiSocialYoutube />
            </a>
          </span>
          <span className="flex justify-center items-center text-2xl sm:text-3xl text-white bg-[#c5001a] rounded-full p-2 sm:p-3 hover:shadow-xl transition-shadow shadow-lg w-12 sm:w-16 h-12 sm:h-16">
            <a href="https://wa.me/971566137817" target="blank_">

              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainSec;
