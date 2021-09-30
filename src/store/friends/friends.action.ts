import initialState from "./friends.state";

export enum EActionType {
  GET = "friends/get",
  SET = "friends/set",
}

export type TGet = ReturnType<typeof get>;
const get = () => ({
  type: EActionType.GET,
});

export type TSet = ReturnType<typeof set>;
const set = (payload: typeof initialState.data) => {
  return {
    type: EActionType.SET,
    payload,
  };
};

export type TFriendsAction = TSet | TGet;

const friendsAction = { set, get };
export default friendsAction;
