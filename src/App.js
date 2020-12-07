import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import CreateProject from "./components/project/CreateProject";
import ProjectDetail from "./components/project/ProjectDetail";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetail} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/createproject' component={CreateProject} />
      </Switch>
      </BrowserRouter>  
    )
  }
}



export default App;
