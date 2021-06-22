import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useLoggedIn } from "../hooks/pengguna";

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useLoggedIn();

  return (
    <Route
      {...rest}
      children={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location, login: true },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
