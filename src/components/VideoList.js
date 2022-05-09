import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    let videos = this.props.videos;
    let onVideoSelect = this.props.onVideoSelect;

    let renderedList = videos.map((video) => {
      return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

export default VideoList;
