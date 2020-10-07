import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  const getId = (id) => {
    onVideoSelect(id);
  };
  return (
    <Grid item xs={12}>
      <Paper
        elevation={6}
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => getId(video.id.videoId)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          style={{ marginRight: "20px" }}
        />
        <Typography variant="h4">{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
