import {React } from "react";
import { useNavigate } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa"

const styles = {
    "backBtn": {
        "cursor": "pointer",
        "padding": "1em",
        "borderRadius": "50%",
    }
}

const BackButton = () => {
    const navigate = useNavigate();
    return  <FaArrowLeft onClick={()=> navigate(-1)} size={20} style={styles.backBtn} />;
};

export default BackButton;