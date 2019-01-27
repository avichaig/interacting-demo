import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Standings from '../components/Standings/Standings';
import BallByBalls from '../components/BallByBalls/BallByBalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      standings: []
    }
  }

  toggleStandingsHandle = () => {
    axios.post('http://82.80.28.194:15248/api/Matches/GetStandings', {
      "ts": 1548583133656,
      "token": "v1vqanqo3agdkh4ib3p0plym355hfafhabnx2w5dc45szoxco4stdc3fbg4wecmm",
      "mobile_version": "3.00.024A"
    }).then(response => {
      this.setState({ standings: response.data.data.standings });
      //console.log(response.data.data.standings);
    });
  }


  render() {
    return (
      <div className="App">
        <header>
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Interacting
            </a>
            <button className="btn btn-primary my-2 my-lg-0" onClick={this.toggleStandingsHandle}>Get Standings</button>
          </nav>
        </header>
        <Standings standings={this.state.standings}></Standings>
        <BallByBalls></BallByBalls>
      </div>
    );
  }
}

export default App;
