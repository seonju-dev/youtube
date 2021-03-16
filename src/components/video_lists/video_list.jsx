import React from "react";
import VideoItem from "../video_items/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.gird;
  return (
    <ul className={`${styles.video} ${displayType}`}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
