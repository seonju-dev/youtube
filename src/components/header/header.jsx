import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

const Header = () => {
  const inputRef = useRef(null);
  window.onload = () => {
    inputRef.current.focus();
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="../img/youtube.png" alt="youtube_logo" width="75" />
        <h1>SSunTube</h1>
      </div>
      <div className={styles.search}>
        <input type="text" ref={inputRef} className={styles.textBox} />
        <FontAwesomeIcon icon={faSearch} size="2x" color="rgb(116, 116, 116)" />
      </div>
    </div>
  );
};

export default Header;
