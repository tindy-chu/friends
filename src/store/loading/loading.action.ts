import initialState from "./loading.state";

export enum EActionType {
  START = "loading/start",
  COMPLETE = "loading/complete",
}

export type TLoad = ReturnType<typeof start>;
const start = () => ({
  type: EActionType.START,
});

export type TComplete = ReturnType<typeof complete>;
const complete = () => ({
  type: EActionType.COMPLETE,
});

export type TLoadingAction = TLoad | TComplete;

const loadingAction = { start, complete };
export default loadingAction;
