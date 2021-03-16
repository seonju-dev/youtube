import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_lists/video_list";
import Header from "./components/header/header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <div className={styles.app}>
        <Header onSearch={search} />
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo && "list"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
