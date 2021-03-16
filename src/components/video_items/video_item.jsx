import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(({ video, video: { snippet }, onVideoClick }) => (
  <li
    className={styles.container}
    onClick={() => {
      onVideoClick(video);
    }}
  >
    <div className={styles.video}>
      <img
        className={styles.thumbnails}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnails"
      />
      <div className={styles.name}>
        <p className={styles.channel}>{snippet.channelTitle}</p>
        <p className={styles.title}>{snippet.title}</p>
      </div>
    </div>
  </li>
));

export default VideoItem;
