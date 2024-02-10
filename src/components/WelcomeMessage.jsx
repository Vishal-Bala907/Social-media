import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WelcomeMessage({ handleOnGetPostClicked }) {
  return (
    <>
      <h2 className="text-center mt-3 mb-3">There are no posts !</h2>;
      <button
        type="button"
        className="btn btn-success fetch-Button"
        onClick={(event) => handleOnGetPostClicked()}
      >
        Fetch Posts
      </button>
    </>
  );
}
