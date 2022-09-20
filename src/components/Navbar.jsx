import { Stack, Typography } from "@mui/material"; // External Component
import { Link } from "react-router-dom";
import logo from "./logo.png"; // LOGO
import { SearchBar } from "./"; // Custom Component

const Navbar = () => {
  
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "black",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={40} className="logo" />
        <Typography
          variant={{ sm: "h6", md: "h3" }}
          sx={{ color: "white", marginLeft: "10px" }}
        >
          Stream
        </Typography>
        <Typography variant={{ sm: "h6", md: "h3" }} sx={{ color: "#F31503" }}>
          line
        </Typography>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
