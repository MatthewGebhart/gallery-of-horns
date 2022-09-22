import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


class BigBeast extends React.Component {
    render() {
        return (
            <>
            <Modal 
            show={this.props.showModal}
            onHide={element => this.props.setShowModal(false)} 
            centered 
            size='lg'
            >
                <div className='text-center'>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.selectedBeast.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body centered>
                        <img 
                        src={this.props.selectedBeast.image_url}
                        alt={this.props.selectedBeast.title} 
                        />
                        <p>{this.props.selectedBeast.description}</p>
                    </Modal.Body>
                </div>
            </Modal>
            </>
        );
    };
};

export default BigBeast;