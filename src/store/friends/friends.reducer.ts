import { EActionType, TFriendsAction, TSet } from "./friends.action";
import initialState from "./friends.state";

export default function reducer(
  state = initialState,
  action: TFriendsAction
): typeof initialState {
  switch (action.type) {
    case EActionType.SET:
      state.data = (action as TSet).payload;
      return state;
    case EActionType.GET:
    default:
      return state;
  }
}
