import React from "react";

// Context
import {
    MenuConsumer,
} from "../../context/Menu";

function Navbar() {
    return(
        <div className="w-full h-[75px] px-[20px] border-2 border-trans-white-400 flex justify-between items-center">
            <span className="font-semibold text-2xl">VirtualTeach ©</span>
            {/* <Menu /> */}

             <MenuConsumer>
                {({ menuOpen, setMenuOpen }) => {
                   return <div className="relative burger-menu pl-5 flex flex-col items-center" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className={`w-[45px] h-[2px] bg-white duration-300 ${menuOpen && 'absolute top-1/2 right-0 rotate-45 origin-center'}`}></span>
                            <span className={`w-[45px] h-[2px] mt-[6px] bg-white duration-300 ${menuOpen && 'absolute top-1/2 right-0 -rotate-45 origin-center mt-0'}`}></span>
                          </div> 
                }}
            </MenuConsumer>
             
        </div>
    )
}

export default Navbar;