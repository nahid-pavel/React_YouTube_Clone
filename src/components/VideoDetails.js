import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetails = ({ video }) => {
  if (!video) return <h1>No Video Found. Please Search One Above.</h1>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "50%" }}>
        <iframe
          frameBorder="0"
          width="100%"
          height="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title}- {video.snippet.channelTitle}
        </Typography>
        <Typography variant="h4">{video.snippet.channelTitle}</Typography>
        <Typography variant="h4">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetails;
