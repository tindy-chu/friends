import initialState from "./appBar.state";

export enum EActionType {
  SET_TITLE = "appBar/setTitle",
  SET_BACK_BUTTON_VISIBLE = "appBar/setBackButtonVisible",
}

export type TSetTitle = ReturnType<typeof setTitle>;
const setTitle = (payload: typeof initialState.title) => ({
  type: EActionType.SET_TITLE,
  payload,
});

export type TSetBackButtonVisible = ReturnType<typeof setBackButtonVisible>;
const setBackButtonVisible = (
  payload: typeof initialState.backButtonVisible
) => ({
  type: EActionType.SET_BACK_BUTTON_VISIBLE,
  payload,
});

export type TAppBarAction = TSetTitle | TSetBackButtonVisible;

const appBarAction = { setTitle, setBackButtonVisible };
export default appBarAction;
