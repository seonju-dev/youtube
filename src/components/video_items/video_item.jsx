import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.video}>
    <img
      className={styles.thumbnails}
      src={snippet.thumbnails.medium.url}
      alt="video thumbnails"
    />
  </li>
);

export default VideoItem;
