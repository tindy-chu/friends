import React, { useEffect, useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import appBarAction from "../../store/appBar/appBar.action";
import { TFriend } from "../../store/friends/friends.state";
import { useParams } from "react-router-dom";
import friendsAction from "../../store/friends/friends.action";
import Maps from "../maps/Maps";

import friendsStyles from "../friends/Friends.module.scss";
import styles from "./FriendDetail.module.scss";

export default function FriendDetail() {
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>();
  const friends = useAppSelector((state) => state.friends.data) || [];

  const [friend, setFriend] = useState<TFriend>({
    _id: "",
    name: {
      last: "",
      first: "",
    },
    email: "",
    picture: "",
    location: {
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    dispatch(appBarAction.setTitle("Your Friend"));
    dispatch(appBarAction.setBackButtonVisible(true));

    if (friends.length === 0) {
      dispatch(friendsAction.get());
    }
  }, []);

  useEffect(() => {
    const currentFriend = friends.filter(
      (current) => current._id === params.id
    )[0];
    if (currentFriend) {
      setFriend(currentFriend);
    }
  }, [friends]);

  const { location, picture, name } = friend;
  return (
    <div className={styles.container}>
      <div className={styles.mapsDesc}>
        <div>lat: {location.latitude}</div>
        <div>lng: {location.longitude || 0}</div>
      </div>

      <div className={styles.maps}>
        <Maps lat={location.latitude} lng={location.longitude} />
      </div>

      <div className={styles.info}>
        {picture && (
          <img className={friendsStyles.picture} alt={picture} src={picture} />
        )}

        <div className={friendsStyles.name}>{`${name.first} ${name.last}`}</div>
      </div>
    </div>
  );
}
