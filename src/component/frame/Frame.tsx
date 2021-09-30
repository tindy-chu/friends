import React from "react";
import { ToastContainer } from "react-toastify";

import AppBar from "../appBar/AppBar";
import Loading from "../loading/Loading";

import "react-toastify/dist/ReactToastify.css";

import styles from "./Frame.module.scss";
import ScrollTopButton from "../scrollTopButton/ScrollTopButton";

type Props = { children: React.ReactNode };

const Frame: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Loading />
      <ToastContainer />
      <AppBar />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
      <ScrollTopButton />
    </>
  );
};

export default Frame;
