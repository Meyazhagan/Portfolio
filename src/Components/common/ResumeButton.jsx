import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function ResumeButton() {
    return (
        <button
            className="text-left 
            flex  items-center
            gap-2 group flex-shrink-0
            pr-4 py-2 w-fit 
            dark:bg-teal-700 bg-teal-600 text-white rounded-lg hover:shadow-md">
            <AiOutlineArrowRight className="group-hover:rotate-90 transform transition-transform ml-2" />
            <span className="text-sm">MY RESUME</span>
        </button>
    );
}

export default ResumeButton;
