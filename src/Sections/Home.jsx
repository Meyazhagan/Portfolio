import React from "react";
import Astronaut from "../assets/images/page-logo.png";
import { BsSuitHeartFill } from "react-icons/bs";
import ResumeButton from "../Components/common/ResumeButton";
import { IoSend } from "react-icons/io5";
import { AiOutlineArrowDown } from "react-icons/ai";

const ButtonOutline = ({ children, ...rest }) => {
    return (
        <a
            className="px-4 border-2  py-2 flex-shrink-0
    flex items-center gap-2 group
    border-teal-600 text-teal-600 
    dark:border-teal-500 dark:text-teal-500 
    hover:bg-teal-600 hover:text-white
    dark:hover:border-teal-700
    dark:hover:bg-teal-700 dark:hover:text-white
    rounded-lg transition-dark"
            {...rest}>
            {children}
        </a>
    );
};

function Home() {
    return (
        <div
            id="home"
            className="relative min-h-screen scroll-mt-20 flex-col-reverse md:flex-row flex items-center justify-evenly">
            <div className="text font-nunito">
                <div className="md:text-5xl text-2xl">
                    Hi there,
                    <br />
                    I'm Meyazhagan
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 transition-dark">
                    I <BsSuitHeartFill className="text-red-500" /> Coding
                </div>

                <div className="mt-5 flex gap-4">
                    <ButtonOutline href="#hire-me">
                        Contact Me
                        <IoSend className="group-hover:-rotate-45 transform transition-transform" />
                    </ButtonOutline>
                    <ResumeButton />
                </div>
            </div>
            <img
                src={Astronaut}
                alt="..."
                className="md:w-96 md:h-96 w-72 h-72  aspect-auto animate-slite"
            />
            <a
                href="#about"
                className="absolute right-0 sm:bottom-20 bottom-4  tracking-wider uppercase text-sm flex items-center gap-2">
                scroll <AiOutlineArrowDown className="animate-bounce" />
            </a>
        </div>
    );
}

export default Home;
