import React from "react";
import PropTypes from 'prop-types';
// Icon
import {
    FaLongArrowAltRight
} from "react-icons/fa"
// component
import Paragraph from "../Desc/Paragraph";

function MainButton({text}) {
    return(
        <button className="w-full text-left py-5 px-8 flex justify-between items-center text-white bg-transparent border-trans-white-400 border-[1px] rounded-full h-[70px] group transition-all ease-out hover:bg-white hover:duration-500 hover:text-blackFont-800">
            <Paragraph bold text={text}/>
            <FaLongArrowAltRight size={20}/>
        </button>
    )
}

MainButton.protoTypes = {
    text: PropTypes.string.isRequired
}

export default MainButton;