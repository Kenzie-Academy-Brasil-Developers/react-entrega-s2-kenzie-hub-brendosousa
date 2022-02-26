import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";
import Register from "../pages/Register";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("@Kenziehub:token"));

    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/register">
        <Register auth={auth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard auth={auth} setAuth={setAuth} />
      </Route>
    </Switch>
  );
};

export default Routes;
