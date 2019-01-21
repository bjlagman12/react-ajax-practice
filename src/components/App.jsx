import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
    };

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
    alert('A name was submitted: ' + this.state.name + this.state.message);
    // event.preventDefault;
  }

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