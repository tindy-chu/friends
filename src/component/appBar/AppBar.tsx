import React from "react";
import { useAppSelector } from "../../store/hooks";

import styles from "./AppBar.module.scss";
import BackButton from "./backButton/BackButton";

export default function Appbar() {
  const title = useAppSelector((state) => state.appBar.title);

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
