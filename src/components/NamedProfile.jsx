import { React } from "react";

const colorOptions = {
    blue: "#6495ED",
    green: "#90EE90",
    red: "#FF7F7F",
    purple: "#9370DB",
    cyan: "#00CED1",
    magenta: "#DA70D6",
    orange: "#FFA54F",
}
const colorIndex = [
    "blue", "green", "red", "purple", "cyan", "magenta", "orange",
]
const sizeOptions = {
    small: "1.25em",
    medium: "2em",
    large: "4em",
}

function getRandomColor() {
    const index = Math.floor(Math.random() * (6));
    const colorType = colorIndex[index];
    return colorOptions[colorType];
}

const NamedProfile = ({name, color, size, ...extraProps}) => {
    const firstLetter = name[0];
    const backColor = color ?? getRandomColor();
    const fontSize = size ?? sizeOptions.small;

    const styles = {
        nameCircle:  {
            width: "3em",
            height: "3em",
            backgroundColor: backColor,
            borderRadius: "50%",
            textAlign: "center",
            lineHeight: "3em",
            marginRight: "10px",
            fontSize: fontSize,
        }
    }
    
    return  <div data-testid="namedProfile" style={styles.nameCircle} {...extraProps}>{firstLetter}</div>

};

export {NamedProfile, colorOptions, sizeOptions};