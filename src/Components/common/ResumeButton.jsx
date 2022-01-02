import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdDarkMode, MdPrint } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import my_resume from "../../assets/resumes/my_resume.pdf";
import dark_version from "../../assets/resumes/dark_version.pdf";
import print_version from "../../assets/resumes/print_version.pdf";

function ResumeButton() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                onClick={() => setOpen((prev) => !prev)}
                className="text-left 
                flex  items-center
                gap-2 group flex-shrink-0
                pr-4 py-2 w-fit relative
                dark:bg-teal-700 bg-teal-600 rounded-lg hover:shadow-md">
                <AiOutlineArrowRight className={`${open ? "rotate-90" : ""} text-white transform transition-transform ml-2`} />
                <span className="text-sm text-white">MY RESUME</span>
                {open && (
                    <div className="absolute -bottom-12 flex gap-2">
                        <a
                            href={my_resume}
                            target={"_blank"}
                            className="p-2 dark:bg-slate-800 dark:hover:bg-slate-700 
                            dark:text-slate-100 transition-dark 
                            hover:bg-slate-300 bg-slate-200 
                            rounded-md text-slate-800">
                            <BsSunFill fontSize={20} />
                        </a>
                        <a
                            href={dark_version}
                            target={"_blank"}
                            className="p-2 dark:bg-slate-800 dark:hover:bg-slate-700 
                            dark:text-slate-100 transition-dark 
                            hover:bg-slate-300 bg-slate-200 
                            rounded-md text-slate-800">
                            <MdDarkMode fontSize={20} />
                        </a>
                        <a
                            href={print_version}
                            target={"_blank"}
                            className="p-2 dark:bg-slate-800 dark:hover:bg-slate-700 
                            dark:text-slate-100 transition-dark 
                            hover:bg-slate-300 bg-slate-200 
                            rounded-md text-slate-800">
                            <MdPrint fontSize={20} />
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}

export default ResumeButton;
