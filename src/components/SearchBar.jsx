import { useState } from "react"; // Core Components
import { useNavigate } from "react-router-dom"; // External Components
import { Paper, IconButton } from "@mui/material"; // External Components
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        boxShadow: "none",
        border: "1px solid red",
        pl: 2,
        mr: { sm: 5 },
        height: { xs: "35px", sm: "40px", md: "auto" },
        ml: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
