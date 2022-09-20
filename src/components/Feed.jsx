import { useState, useEffect } from "react"; // Core Components
import { Box, Stack, Typography } from "@mui/material"; // External Components
import { Sidebar, Videos } from "./"; // Custom Components
import { fetchApi } from "../utils/fetchApi";

const Feed = () => {
  const [selectedCategory, setSeletectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  //  Load New Videos EveryTime Category Changes
  useEffect(() => {
    setVideos(null);
    fetchApi(`search?part=snippet&q=${selectedCategory}&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {/* Sidebar Showing Categories */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSeletectedCategory={setSeletectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          Copyright 2022 - &infin; Streamline
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white", textAlign: "center" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503", marginLeft: "10px" }}>Videos</span>
        </Typography>

        {/* Component Loading Videos */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
