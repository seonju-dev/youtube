import React, { memo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faVideo } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

const Header = memo(({ onSearch }) => {
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
        <FontAwesomeIcon icon={faVideo} size="2x" color="rgb(218, 115, 89)" />
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
});

export default Header;
