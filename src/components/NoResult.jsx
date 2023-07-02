import {React, useState} from "react";
import { useNavigate } from "react-router-dom";

const styles = {
    wrapper: {
        textAlign: "center",
        boxSizing: "border-box",
        padding: "1em 1.5em",
        width: "100%",
        fontSize: "1.5em",
        border: "1px solid #eee",
        marginTop: "2em",
    }
}

const NoResult = () => {
    const [value, setValue] = useState("");

    const navigate = useNavigate();
  
    const handleSearch = (event) => {
      event.preventDefault();
      if (value) {
        navigate("/search", { state: value, replace: true });
      }
    };
  

    return (
        <div style={styles.wrapper}>
            No Result. 
        </div>
    );
};

export default NoResult;