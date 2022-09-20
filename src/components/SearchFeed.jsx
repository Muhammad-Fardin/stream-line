import { useState, useEffect } from "react"; // Core Components
import { Box, Typography } from "@mui/material"; // External Components
import { Videos } from "./"; // Custom Components
import { fetchApi } from "../utils/fetchApi";
import { useParams } from "react-router-dom"; // External Components

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white", textAlign: "center" }}
      >
        search results for
        <span style={{ color: "#F31503", marginLeft: "10px" }}>
          {searchTerm}
        </span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
