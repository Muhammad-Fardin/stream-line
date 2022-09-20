import { Box, Stack } from "@mui/material"; //External Components
import { VideoCard, ChannelCard, Loader } from "./"; //Custom Components

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />; // Loading While Data if Fetching From Api

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
