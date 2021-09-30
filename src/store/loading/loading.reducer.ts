import { EActionType, TLoadingAction } from "./loading.action";
import initialState from "./loading.state";

export default function reducer(
  state = initialState,
  action: TLoadingAction
): typeof initialState {
  switch (action.type) {
    case EActionType.START:
      state.process = 30;
      return state;
    case EActionType.COMPLETE:
      state.process = 100;
      return state;
    default:
      return state;
  }
}
