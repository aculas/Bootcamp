import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
  state = {
    name: "",
  };
  //   This will provide the value of  anything that is typed into the text box
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlesSubmit = (event) => {
    //   Prevents the browser from reloading page
    event.preventDefault();
    // Makes a new user using the name property
    const user = {
      name: this.state.name,
    };
    // This is where you want to put any information you want to pass to your database
    //Fot a put request is similar .put(`https://jsonplaceholder.typicode.com/users`, { user })
    /*For a delete request we would need to delete we need to change name at stat to id and pass 0
    Then we would make the axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`
    and change button to say delete and the intput type to number and name = id
    */
    axios
      .post(`https://jsonplaceholder.typicode.com/users/`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  // This renders a form and tracks changes for inputs
  render() {
    return (
      <form onSubmit={this.handlesSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
