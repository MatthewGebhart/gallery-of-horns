import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px'}}>
                <h1> Welcome to Horny Beasts </h1>
            </div>
        );
    };
}

export default Header;