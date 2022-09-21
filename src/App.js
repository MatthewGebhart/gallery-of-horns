import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
};


export default App;
