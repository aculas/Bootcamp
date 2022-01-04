import React from "react";
import NewPost from "./NewPost";
import { Route, NavLink, Switch } from "react-router-dom";
import Post from "./Post";
import "./App.css";

import Home from "./Home";

/* Application structure:
 * shows header, nav links, and contains routes to:
 *   - new form
 *   - homepage
 *   - individual posts
 */

function App() {
  return (
    <div className="App Container">
      <header className="App-header jumbotron mt-2">
        <h1 className="App-title display-4">Microblog</h1>
        <p className="lead">Get in the groove of blogging!</p>
        <nav>
          <NavLink exact to="/">
            Blog
          </NavLink>
          <NavLink exact to="/new">
            Add a new post
          </NavLink>
        </nav>
      </header>

      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
