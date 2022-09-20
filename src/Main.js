import React from 'react';
import HornedBeast from './HornedBeast.js';
import narwhal from './narwhal.jpg';
import triceratops from './triceratops.png';

class Main extends React.Component {
    render () {
        return (
            <>
            <div>
                <HornedBeast 
                src={narwhal} 
                alt={'A Happy Narwhal'} 
                title={'Narwhal'}
                />
                <HornedBeast 
                src={triceratops} 
                alt={'A Grumpy Triceratops'} 
                title={'Triceratops'}
                />
            </div>
            </>
        )
    }
}

export default Main;