import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_lists/video_list";
import Header from "./components/header/header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube.serch(query).then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
