import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material"; // External Components
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Icon
import altVideoThumbnail from './logo.png'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "80vw", sm: "280px", md: "320px" },
        boxShadow: "none",
        borderRadius: "10px",
        border: "none",
        outline: "none"
      }}
    >

      <Link to={`/video/${videoId}`}>

        <CardMedia
          image={snippet?.thumbnails?.high?.url || altVideoThumbnail}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />

      </Link>
      
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={`/channel/${snippet?.channelId}`}
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
