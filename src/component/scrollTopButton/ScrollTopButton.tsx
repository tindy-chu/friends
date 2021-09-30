import React, { useEffect, useRef, useState } from "react";

import styles from "./ScrollTopButton.module.scss";

export default function ScrollTopButton(): JSX.Element {
  // const { state, dispatch } = React.useContext(Store);
  // const { scrollTopButton: scrollTopButtonS } = state;
  const [visible, setVisible] = useState(false);

  const visibleRef = useRef(false);
  useEffect(() => {
    const toggleVisibility = (): void => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 60) {
        if (!visibleRef.current) {
          setVisible(true);
        }
      } else {
        setVisible(false);
      }
    };

    document.addEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <div className={styles.container} onClick={scrollToTop}>
      <div className={styles.up}>&#8607;</div>
    </div>
  ) : (
    <></>
  );
}
