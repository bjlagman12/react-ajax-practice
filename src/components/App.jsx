import React from 'react';
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": '',
      "message": ''
    };
    console.log(this.state)

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeMessage(event) {
    this.setState({message:event.target.value});
  }


  handleSubmit(event) {
    console.log(this.state)
    // alert('A name was submittfed: ' + this.state.name + this.state.message);
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
      data: JSON.stringify(this.state),
      contentType: 'application/json',
      // success: alert()console.log('yay')
    })
    .done(function(data) {
      console.log(data)
    })
    .fail(function(data) {
      console.log('FAIL YOU SUCK', data)
    })
  };

  render() {
    return (
       <div>
      <h2>Server Response:</h2>
      <h2>Response goes here!</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          Message:
          <input type="text" value={this.state.message} onChange={this.handleChangeMessage} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default App