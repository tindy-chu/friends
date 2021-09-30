import React from "react";
import { useAppSelector } from "../../../store/hooks";

import styles from "./BackButton.module.scss";
import { useHistory } from "react-router";

export default function BackButton(): JSX.Element {
  const backButtonVisible = useAppSelector(
    (state) => state.appBar.backButtonVisible
  );

  const history = useHistory();

  const handleClick = () => {
    history.push("/friends");
  };

  return backButtonVisible ? (
    <div className={styles.container}>
      <div className={styles.click} onClick={handleClick}>
        <div className={styles.back}>&#60;</div>
      </div>
    </div>
  ) : (
    <></>
  );
}
