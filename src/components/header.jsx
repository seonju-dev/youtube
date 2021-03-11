import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <img src="../img/youtube.png" alt="youtube_logo" width="75" />
      <h1>SSunTube</h1>
      <input type="text" />
      <FontAwesomeIcon icon={faSearch} size="2x" />
    </>
  );
};

export default Header;
