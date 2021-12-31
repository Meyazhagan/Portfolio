import React from "react";
import { IoSend } from "react-icons/io5";

function Contact() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="dark:bg-slate-800 transition-dark dark:text-slate-100 text-slate-800 bg-slate-200 rounded-lg py-2 px-4  col-span-6 flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="your name"
                    className="bg-transparent focus:outline-none py-1"
                />
            </div>
            <div className="dark:bg-slate-800 transition-dark dark:text-slate-100 text-slate-800 bg-slate-200 rounded-lg py-2 px-4  col-span-6 flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="your_email@gmail.com"
                    className="bg-transparent focus:outline-none py-1"
                />
            </div>
            <div className="dark:bg-slate-800 transition-dark dark:text-slate-100 text-slate-800 bg-slate-200 rounded-lg py-2 px-4  col-span-12 flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    className="bg-transparent focus:outline-none py-1"
                    placeholder="your message"
                    id="message"
                    cols="10"
                    rows="8"></textarea>
            </div>
            <div className="col-span-full">
                <button
                    className="mx-4 px-4 py-2 
                    flex gap-2 items-center group
                    bg-teal-600 dark:bg-teal-700 text-slate-100 rounded-lg">
                    Send
                    <IoSend className="group-hover:-rotate-45 transform transition-transform" />
                </button>
            </div>
        </div>
    );
}

export default Contact;
