import React from "react";

class VideoDetail extends React.Component {
  render() {
    let video = this.props.video;
    if (!video) {
      return <div>Loading...</div>;
    }
    let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title={video.snippet.title} src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
