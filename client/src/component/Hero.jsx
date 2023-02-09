import React from "react";
// component
import PageTitle from "./Heading/PageTitle";
import Paragraph from "./Desc/Paragraph";
import MainButton from "./Button/MainButton";
import Navbar from "./Navigation/Navbar";

function Hero() {
    return(
        <header className="relative w-full h-[732px] px-5 pt-5 text-white flex flex-col justify-between items-start overflow-hidden">           
           <Navbar />
           <img src="./drone.jpg" alt="drone" className="absolute top-0 left-0 -z-10 w-full h-full object-cover brightness-50"></img>
            <div className="w-full h-[60%] flex flex-col">
                <p className="text-lg text-white font-semibold">01</p>
                <PageTitle highlighter="Services" text="Photography" />
                <div className="my-[40px]">
                    <Paragraph text="Beautiful views and photography services of views or public places" />
                </div>
                <MainButton text="Read Description"/>
            </div>
            <div className="relative ml-[56%] w-1/2 h-[50px] bg-white"></div>
        </header>
    )
}

export default Hero;