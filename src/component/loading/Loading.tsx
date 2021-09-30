import React from "react";
import LoadingBar from "react-top-loading-bar";
import { useAppSelector } from "../../store/hooks";

export default function Loading() {
  const process = useAppSelector((state) => state.loading.process);

  return <LoadingBar color="#FD5C63" progress={process} />;
}
