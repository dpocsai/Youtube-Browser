import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const searchVideos = async (searchTerm) => {
    let response = await youtube.get("/search", {
      params: { q: searchTerm },
    });
    setVideos(response.data.items);
  };

  return [videos, searchVideos];
};

export default useVideos;
