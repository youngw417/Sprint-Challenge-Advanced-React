import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import DisData from './components/disdata';

class App extends React.Component{

  state = {
    players: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(res => {
      this.setState({
        players: res.data
      })
      console.log(res);
    })
  }
  render(){
    return (
        <div className="App">
          <Header />
            <div className='lists'>
              {
                this.state.players.map(player => 
                  <DisData key= {player.id}  player = {player}/>
                )
              }

            </div>
          
        </div>
      );


  }
  
}

export default App;
