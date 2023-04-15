import React from "react";
import PropTypes from "prop-types";
function Copyright({ socialMedia }) {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between py-8 px-5 bg-blackFont-800 text-trans-white-800 border-t-[1px] border-trans-white-400">
      <p className="text-[14px] xlX:text-3xl">
        {`Virtual Technology — ©${year} All rights reserved`}
      </p>
      <p className="text-[14px] xlX:text-3xl">
        Check our Social Media —
        {socialMedia.map((social, idx) => (
          <>
            {" "}
            <a
              className="underline text-white"
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={idx}
            >
              {social.name}
            </a>
            {idx !== socialMedia.length - 1 && <span className="mx-1">|</span>}
          </>
        ))}
      </p>
    </div>
  );
}

Copyright.propTypes = {
  socialMedia: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Copyright;
