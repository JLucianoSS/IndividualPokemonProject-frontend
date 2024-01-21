import { useEffect, useState } from "react";
import styles from "./ProgressLoading.module.css";

export const ProgressLoading = ({ isLoading }) => {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (filled < 100 && isLoading) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 300);
    }
  }, [filled, isLoading]);

  return (
    <div className={styles.progressbar}>
      <div
        style={{
          height: "100%",
          width: `${filled}%`,
          backgroundColor: "#a66cff",
          transition: "width 0.5s",
        }}
      ></div>
      <span className={styles.progressPercent}>{filled}%</span>
    </div>
  );
};
