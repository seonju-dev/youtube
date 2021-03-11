import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_lists/video_list";
import Header from "./components/header/header";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=40&chart=mostPopular&key=AIzaSyB6UlIzV-X9cvw_YNJw0NBuJ8IcPd-l-OA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
