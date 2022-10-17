import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
const Feed = () => {
  return (
    <Box p={2} flex={4} >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post) => (
        <Post key={post} />
      ))}
    </Box>
  );
};

export default Feed;
