// Native React Imports
import React, { Fragment, useContext } from "react";

// Custom Component Imports
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext)

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
