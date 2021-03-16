import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

const Header = ({ onSearch }) => {
  const inputRef = useRef();
  window.onload = () => {
    inputRef.current.focus();
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
    inputRef.current.value = null;
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      inputRef.current.value = null;
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="../img/youtube.png" alt="youtube_logo" width="75" />
        <h1>SSunTube</h1>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          ref={inputRef}
          className={styles.textBox}
          placeholder="SEARCH..."
          onKeyPress={onKeyPress}
        />
        <button className={styles.searchBtn} onClick={onClick}>
          <FontAwesomeIcon
            icon={faSearch}
            size="2x"
            color="rgb(116, 116, 116)"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
