import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ErrorPage({
  message = "The requested resource was not found on the server.",
  status = "Not Found",
  errorCode = 404,
}) {
  return (
    <div class="flex items-center justify-center w-screen h-screen">
      <div class="px-4 lg:py-12">
        <div class="lg:gap-4 lg:flex">
          <div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 class="font-bold text-custome-green-800 text-9xl">
              {errorCode}
            </h1>
            <p class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-custome-green-800">Oops!</span> {status}
            </p>
            <p class="mb-8 text-center text-gray-500 md:text-lg">{message}</p>
            <Link
              to="/"
              class="px-6 py-2 text-sm font-semibold text-green-800 bg-green-100"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  errorCode: PropTypes.number.isRequired,
};

export default ErrorPage;
