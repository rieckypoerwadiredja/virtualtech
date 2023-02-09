import React from "react";
import PropTypes from 'prop-types';

function Paragraph({text, bold = false}) {
    if(bold){
        return(
            <p className="font-semibold text-lg tracking-wide">{text}</p>
        ) 
    }
    return(
        <p className="text-whiteFont-400 text-lg tracking-wide">{text}</p>
    )
}

Paragraph.protoTypes = {
    text: PropTypes.string.isRequired,
    bold: PropTypes.bool
}

export default Paragraph;