import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Beast from './components/Beast.js';
import data from './data.json';
import BeastForm from './components/BeastForm.js';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayedBeasts: data,
    };
  }


    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.formSelection.value);

        // const hornDrop = e.target.value;

        const filteredBeasts = data.filter((beast) => 
        parseInt(e.target.formSelection.value) === beast.horns);
      
        console.log(filteredBeasts);

        this.setState({displayedBeasts: filteredBeasts});
    }


    
    render () {
        return (
            <Container fluid='md'>
                <BeastForm handleFormSubmit={this.handleFormSubmit}/>
                <Row>
                {this.state.displayedBeasts.map((beast) => {
                    return <Beast 
                    src={beast.image_url} 
                    description={beast.description} 
                    title={beast.title} 
                    key={beast._id}
                    id={beast._id} 
                    horns={beast.horns}
                    setShowModal={this.props.setShowModal}
                    />
                })};
                </Row>
            </Container>
        );
    };
};

export default Main;