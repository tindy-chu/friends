import { combineReducers } from "redux";
import friends from "./friends/friends.reducer";
import appBar from "./appBar/appBar.reducer";
import loading from "./loading/loading.reducer";

export default combineReducers({
  friends,
  appBar,
  loading,
});
