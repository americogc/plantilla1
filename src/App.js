import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./modules/Login";
// import Layout from "./modules/Layout";
// import Admin from "./components/Admin";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./temaConfig";

import { LayoutPublic, LayoutAdmin } from "./modules/layout";
import {
  PageHome,  
  PageHabitaciones,
  PageLogin,
  PageRegister,
  PageAdminDashboard,
} from "./pages";

import { regUser } from "./modules/regUser/container/frmRegUser"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            <Route
              exact
              path="/"
              name="Home"
              render={() => (
                <LayoutPublic>
                  <PageHome />
                </LayoutPublic>
              )}
            />
            <Route
              path="/habitaciones"
              name="Home"
              render={() => (
                <LayoutPublic>
                  <PageHabitaciones />
                </LayoutPublic>
              )}
            />
            <Route
              path="/login"
              name="Login"
              render={() => (
                <LayoutPublic>
                  <PageLogin />
                </LayoutPublic>
              )}
            />
            <Route
              path="/register"
              name="Register"
              render={() => (
                <LayoutPublic>
                  <PageRegister />
                </LayoutPublic>
              )}
            />

            <Route
              path="/admin"
              name="Admin"
              render={() => (
                <LayoutAdmin>
                  <PageAdminDashboard />
                </LayoutAdmin>
              )}
            />

            <Route
              path="/admin/reg-user"
              name="Adminreguser"
              render={() => (
                <LayoutAdmin>
                  <regUser />
                </LayoutAdmin>
              )}
            />

            {/* <Route exact path="/app" name="Login" render={() => <Login />} />
            <Route exact path="/" name="Layout" render={() => <Layout />} />
            <Route exact path="/admin" name="Admin" render={() => <Admin />} /> */}
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
