import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import appBarAction from "../../store/appBar/appBar.action";
import friendsAction from "../../store/friends/friends.action";

import styles from "./Friends.module.scss";
import { useHistory } from "react-router";

export default function Friends() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(appBarAction.setTitle("All Friends"));
    dispatch(appBarAction.setBackButtonVisible(false));
    dispatch(friendsAction.get());

    document.body.classList.add(styles.backgroundGrey);

    return () => {
      document.body.classList.remove(styles.backgroundGrey);
    };
  }, []);

  const friends = useAppSelector((state) => state.friends.data) || [];

  const handleClick = (id: string) => {
    history.push(`/friends/${id}`);
  };

  return (
    <div className={styles.container}>
      {friends.map((current) => (
        <LazyLoad height={176} key={current._id}>
          <div
            className={styles.card}
            key={current._id}
            onClick={() => handleClick(current._id)}
          >
            <img
              className={styles.picture}
              alt={current.picture}
              src={current.picture}
            />
            <div
              className={styles.name}
            >{`${current.name.first} ${current.name.last}`}</div>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
}
