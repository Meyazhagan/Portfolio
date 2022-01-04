import React from "react";
import Heading from "../Components/common/Heading";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import Contact from "./Contact";
import ResumeButton from "../Components/common/ResumeButton";
import { BsGithub } from "react-icons/bs";

function HireMe() {
    return (
        <div id="hire-me" className=" scroll-mt-20 my-20 flex flex-col items-center">
            <Heading title="Hire Me" />
            <div className="flex mt-10 items-start gap-16 md:gap-10 justify-center md:flex-row flex-col">
                <div className="grid grid-cols-[max-content_1fr] items-center gap-x-4">
                    <FiPhoneCall size={"1.25rem"} className="text-teal-600" />

                    <div className="text-lg uppercase">Call Me</div>
                    <span></span>
                    <a
                        href="tel:8667283263"
                        className="dark:text-slate-400 mb-4 text-slate-800 transition-dark hover:underline decoration-teal-400 underline-offset-1 ">
                        +91 86672 83263
                    </a>

                    <HiOutlineMail size={"1.25rem"} className="text-teal-600" />

                    <div className="text-lg uppercase">Email</div>
                    <span></span>
                    <a
                        href="mailto:meyazhagan.ofcl@gmail.com"
                        className="dark:text-slate-400 mb-4 text-slate-800 transition-dark hover:underline decoration-teal-400 underline-offset-1 ">
                        meyazhagan.ofcl@gmail.com
                    </a>

                    <IoLocationOutline size={"1.25rem"} className="text-teal-600" />

                    <div className="text-lg uppercase">Location</div>
                    <span></span>
                    <div className="dark:text-slate-400 mb-4 text-slate-800 transition-dark hover:underline decoration-teal-400 underline-offset-1 ">
                        Namakkal, Tamil Nadu.
                    </div>

                    <span className="text-teal-600 font-bold">
                        <BsGithub />
                    </span>
                    <a
                        href="https://github.com/Meyazhagan"
                        target={"_blank"}
                        className="dark:text-slate-400 hover:underline decoration-teal-400 underline-offset-1 text-slate-800 transition-dark">
                        https://github.com/Meyazhagan
                    </a>
                    <div className="col-span-full mb-4"></div>

                    <span className="text-teal-600 font-bold">CV</span>
                    <ResumeButton />
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default HireMe;
