import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        user: []
    }
  }

  componentDidMount() {
      axios
          .get('https://api.github.com/users/janemsuh')
          .then(response => {
              console.log(response.data)
              this.setState({ user: response.data })
          })
          .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <UserCard data={this.state.user} />
      </div>
    )
  }
}

export default App;
