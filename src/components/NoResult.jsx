import React from "react";

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
    return (
        <div style={styles.wrapper}>
            No Result
        </div>
    );
};

export default NoResult;