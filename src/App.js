import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import BigBeast from './components/BigBeast.js';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      displayedBeasts: data,
    };
  }

  setShowModal = id => {
    if (id !== false) {
      let filteredBeast = data.filter(v => v._id === id);
      this.setState({ selectedBeast: filteredBeast[0] });
      this.setState({showModal: true});
    } else {
      this.setState({showModal: false});
    };
  };


  render() {
    return (
      <>
      <Header />
      <Main data={data} setShowModal={this.setShowModal}/>
      <Footer />
      <BigBeast 
        showModal={this.state.showModal}
        setShowModal={this.setShowModal}
        selectedBeast={this.state.selectedBeast}
        />
      </>
    )
  }
}


export default App;
