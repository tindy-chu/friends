import initialState from "./user.state";

export enum EActionType {
  API_SIGN_IN = "user/api_sign_in",
  SET_INFO = "user/set_info",
}

export type TApiSignIn = ReturnType<typeof apiSignIn>;
const apiSignIn = () => ({
  type: EActionType.API_SIGN_IN,
  payload: {
    token: "tmpToken",
    info: { id: "tmpId", role: "admin" },
  },
});

export type TSetInfo = ReturnType<typeof setInfo>;
const setInfo = (payload: typeof initialState) => ({
  type: EActionType.SET_INFO,
  payload,
});

export type TUserAction = TApiSignIn | TSetInfo;

const userAction = { apiSignIn, setInfo };
export default userAction;
