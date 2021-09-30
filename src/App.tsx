import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Frame from "./component/frame/Frame";
import FriendDetail from "./component/friendDetails/FriendDetail";
import Friends from "./component/friends/Friends";

function App() {
  return (
    <Router>
      <Frame>
        <Switch>
          <Route path="/friends/:id">
            <FriendDetail />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/">
            <Friends />
          </Route>
        </Switch>
      </Frame>
    </Router>
  );
}

export default App;
