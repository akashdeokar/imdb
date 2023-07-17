import React from "react";
import styles from "./Shimmer.module.css";

const Shimmer = () => {
  return (
    <div
      className={`h-[40vh] w-[200px] rounded-xl flex items-end overflow-hidden ${styles.changecolorlight}`}
    >
      <div className={`w-full p-4 ${styles.changecolordark}`}></div>
    </div>
  );
};

export default Shimmer;
