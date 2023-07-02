import {React, useState} from "react";
import { useNavigate } from "react-router-dom";


const styles = {
    searchInput: {
        borderRadius: "2em",
        border: 0,
        padding: "1em 1.5em",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#eee",
        fontSize: "1em",
    }
}

const SearchInput = () => {
    const [value, setValue] = useState("");

    const navigate = useNavigate();
  
    const handleSearch = (event) => {
      event.preventDefault();
      if (value) {
        navigate("/search", { state: value, replace: true });
      }
    };
  
    return (
        <form
            onSubmit={handleSearch}
        >
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={styles.searchInput} type="text" placeholder="Search" />
        </form>
    );
};

export default SearchInput;