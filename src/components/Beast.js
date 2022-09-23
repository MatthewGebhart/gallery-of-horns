import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Beast extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            description: this.props.description,
            src: this.props.src,
            title: this.props.title,
            favorites: '',
        }
    }

handleClick = () => {
    this.setState({favorites: this.state.favorites + ` 😍 `});
};

handleImgClick = () => {
  this.props.setShowModal(this.props.id);
}

    render () {
        return (
            <Card border='info' style={{ width: '18rem' }} className='mx-3 my-3'>
              <div onClick={this.handleImgClick}>
                <Card.Img variant="top" src={this.props.src} />
              </div>
            <Card.Body>
              <Card.Title as='h2'>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Card.Text as='h5'>Favorites -->    
                {this.state.favorites}
              </Card.Text>
              <Button variant="success" onClick={this.handleClick}>Make Favorite</Button>
            </Card.Body>
          </Card>
        )
    };
};

export default Beast;