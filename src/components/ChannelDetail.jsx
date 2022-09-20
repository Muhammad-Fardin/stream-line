import { useState, useEffect } from "react"; // Core Components
import { useParams } from "react-router-dom"; // External Components
import { Box } from "@mui/material"; // External Components
import { Videos, ChannelCard } from "./"; // Custom Components
import { fetchApi } from "../utils/fetchApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchApi(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: `linear-gradient(30deg, rgba(255,167,98,1) 30%, rgba(243,21,3,1) 100%)`,
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
