import { EActionType, TSetInfo, TUserAction } from "./user.action";
import initialState from "./user.state";

export default function reducer(
  state = initialState,
  action: TUserAction
): typeof initialState {
  switch (action.type) {
    case EActionType.API_SIGN_IN:
      return action.payload;
    case EActionType.SET_INFO:
      const payload = (action as TSetInfo).payload;
      return payload;
    default:
      return state;
  }
}
