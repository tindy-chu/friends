import {
  EActionType,
  TAppBarAction,
  TSetBackButtonVisible,
  TSetTitle,
} from "./appBar.action";
import initialState from "./appBar.state";

export default function reducer(
  state = initialState,
  action: TAppBarAction
): typeof initialState {
  switch (action.type) {
    case EActionType.SET_TITLE:
      state.title = (action as TSetTitle).payload;
      return state;
    case EActionType.SET_BACK_BUTTON_VISIBLE:
      state.backButtonVisible = (action as TSetBackButtonVisible).payload;
      return state;
    default:
      return state;
  }
}
