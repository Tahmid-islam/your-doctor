import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:doctorId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
