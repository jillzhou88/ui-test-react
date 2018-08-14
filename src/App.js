import React, { Component } from 'react';
import { Grid, Row, Navbar } from 'react-bootstrap';
import data from './assets/data.json';
import './App.css';

import Card from './Components/Card/Card';
import List from './Components/List/List';

class App extends Component {
  state = {
    recommendations: {},
    mylist: {}
  }

  componentWillMount() {
    let recommendations = {}, mylist = {};
    data.recommendations.forEach((el) => {
      recommendations[el.id] = el;
    });
    data.mylist.forEach((el) => {
      mylist[el.id] = el;
    });
    this.setState({
      recommendations: recommendations,
      mylist: mylist
    });
  }

  removeMylist = (id) => {
    let mylist = JSON.parse(JSON.stringify(this.state.mylist));
    delete mylist[id];
    this.setState({mylist: mylist});
  }

  addMylist = (id) => {
    let mylist = JSON.parse(JSON.stringify(this.state.mylist));
    mylist[id] = this.state.recommendations[id];
    this.setState({mylist: mylist});
  }

  render() {
    let mylist;
    mylist = Object.entries(this.state.mylist).map(([key, value]) => {
      return (
        <Card item={value} key={value.title+key} button="Remove" click={this.removeMylist}/>
      );
    });

    let recommendations;
    recommendations = Object.entries(this.state.recommendations).map(([key, value]) => {
      return (
        <Card item={value} key={value.title+key} button="Add" click={this.addMylist}/>
      );
    });
    
    return <Grid>
        <Row>My list:</Row>
        <Row>{mylist}</Row>
        <hr />
        <Row>Recommendations:</Row>
        <Row>{recommendations}</Row>
        <Navbar fixedBottom><List list={this.state.mylist} /></Navbar>
      </Grid>;
  }
}

export default App;
