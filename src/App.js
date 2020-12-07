import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import ProjectDetail from "./components/project/ProjectDetail";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetail} />
      </Switch>
      </BrowserRouter>  
    )
  }
}



export default App;
