import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main}></Route>
    </Switch>
  );
};

export default Routes;
