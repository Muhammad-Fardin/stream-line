// External Components
import { HashRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";


// Custom Components
import {
  Navbar,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
  Feed,
} from "./components";

function App() {
  return (
    <HashRouter>
      <Box sx={{ backgroundColor: "black" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </HashRouter>
  );
}

export default App;
