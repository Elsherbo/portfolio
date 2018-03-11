import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import "../App.css";


class home extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
           <Button className="btn btn-primary" href="#"> Home </Button>
           <Button className="btn btn-primary" href="#"> Portofilio </Button>
           <Button className="btn" href="#"> contactus </Button> 
        </Navbar>
      </div>
    );
  }
}

export default home;
