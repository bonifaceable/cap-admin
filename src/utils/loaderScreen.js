import React from "react";
import { CirclesWithBar, LineWave } from "react-loader-spinner";

const LoaderScreen = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        // backgroundColor: "#fff",
        background: "#040a1a",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#fff"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default LoaderScreen;
