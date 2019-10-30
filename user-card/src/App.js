import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/zacharybaca')
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
  return (
    <div className="App">
      <UserCard data = {this.state.data}/>
    </div>
  );
  }
}

export default App;
