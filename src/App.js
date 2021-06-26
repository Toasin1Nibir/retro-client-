
import React from "react";
import Admin from './Components/Admin/Admin.js';
import Home from './Components/Home/Home';
import Event from './Components/Event/Event';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Makeadmin from "./Components/Makeadmin/Makeadmin.js";

export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Email: {loggedInUser.email}</p>
    <Router>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route  path="/home">
        <Home />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/blog/:idblog">
        <Blog />
       </Route>
       <Route path='/makeadmin'>
        <Makeadmin/>
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
       

      </Switch>
    </Router>
     </UserContext.Provider>
  );
}

export default App;
