import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  render() {
    let video = this.props.video;
    let onVideoSelect = this.props.onVideoSelect;
    return (
      <div
        className="item video-item"
        onClick={() => onVideoSelect(video)}
        key={video.id.videoId}
      >
        <img
          alt=""
          src={video.snippet.thumbnails.medium.url}
          className="ui image"
        ></img>
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
