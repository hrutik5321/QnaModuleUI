// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Authentication/Signup/Signup";
import Signin from "./components/Authentication/Signin/Signin";
import Home from "./components/Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
