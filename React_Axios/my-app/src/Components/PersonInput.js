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
    event.preventDefault();
    const user = {
      name: this.state.name,
    };
    // This is where you want to put any information you want to pass to your database
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  // This renders a form and tracks changes for inputs
  render() {
    return (
      <form>
        <label>
          Person Name:
          <input type="text" name="name" />
        </label>
      </form>
    );
  }
}
