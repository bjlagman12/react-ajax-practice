import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };  
    // this.handleChange = this.handleChange.bind(this)
 }
 handleChange(e) {
   this.setState({value:e.target.value})
 };

  render() {
    return (
    <div>
      <h4>
        Server Response:
      </h4>
      <h4>
        Response goes here!
      </h4>
    <form>
      <label>
        Name:
        <input 
          className='name-form' 
          type='text' 
          value={this.state.value} 
          onChange={this.handleChange}/>
      </label>
      <label>
        Message:
        <input 
          className='name-form' 
          type='text' 
          value={this.state.value} 
          onChange={this.handleChange}/>
      </label>
        <input type='submit' value='Submit'/>
    </form>
    </div> 
    );
  }
}

export default App