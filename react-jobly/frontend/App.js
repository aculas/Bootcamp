import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currUser: null,
      loading: true,
    };

    this.login = this.login.bind(this);
    this.logOut = this.logOut.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  //call login to get rid of duplicate code
  async componentDidMount() {
    if (localStorage.token) {
      let currUser = await this.getUser();
      this.setState({ currUser, loading: false });
    } else {
      this.setState({ currUser: null, loading: false });
    }
  }

  async login() {
    let currUser = await this.getUser();
    this.setState({ currUser });
  }

  logOut() {
    localStorage.removeItem("token");
    this.setState({ currUser: null });
  }

  async updateUser() {
    let currUser = await this.getUser();
    this.setState({ currUser });
  }

  async getUser() {
    try {
      let user = (await jwt.decode(localStorage.token)).username;
      let profile = await JoblyApi.getUser(user);
      return profile;
    } catch (err) {
      return null;
    }
  }

  render() {
    if (this.state.loading) {
      return null;
    } else {
      return (
        <div className="App">
          <UserContext.Provider value={this.state.currUser}>
            <BrowserRouter>
              <Nav />
              <Routes
                loginUser={this.login}
                logOutUser={this.logOut}
                updateUserDetails={this.updateUser}
              />
            </BrowserRouter>
          </UserContext.Provider>
        </div>
      );
    }
  }
}

export default App;
