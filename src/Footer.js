import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px'}}>
            <p>&copy; 2022 Matthew Gebhart</p>
            </div>
        );
    };
}

export default Footer;