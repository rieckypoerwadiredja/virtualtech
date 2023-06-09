import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
function Head({ title, desc, keyword, author }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keyword} />
      {author && <meta name="author" content={author} />}
    </Helmet>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default Head;
