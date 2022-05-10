import React from "react";
import styles from "./layout.module.css";

export const Layout = ({ children, pageTitle }) => {
  return (
    <div>
      <div>
        <title>{pageTitle}</title>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
