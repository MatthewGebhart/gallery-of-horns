import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class BeastForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'all'};
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.props.handleFormSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>How much horn do you want to see? </Form.Label>
                        <Form.Select aria-label="All" value={this.state.value} onChange={this.handleChange} placeholder="fdf"> 
                            <option value='all'>All</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='100'>Hundreds</option>
                        </Form.Select>             
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default BeastForm;