import React from "react";
import { BsGithub } from "react-icons/bs";
import ButtonOutline from "./ButtonOutline";

function GithubButton() {
    return (
        <ButtonOutline href="https://github.com/Meyazhagan" target={"_blank"}>
            <BsGithub />
        </ButtonOutline>
    );
}

export default GithubButton;
