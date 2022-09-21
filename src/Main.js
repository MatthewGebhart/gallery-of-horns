import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Beast from './components/Beast.js';
import data from './data.json';


class Main extends React.Component {
    render () {
        return (
            <Container fluid='md'>
                <Row>
                {data.map((beast) => {
                    return <Beast src={beast.image_url} description={beast.description} title={beast.title} key={beast._id} horns={beast.horns}/>
                })};
                </Row>
            </Container>
        );
    };
};

export default Main;