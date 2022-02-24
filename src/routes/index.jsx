import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard auth={auth} />
      </Route>
    </Switch>
  );
};

export default Routes;
