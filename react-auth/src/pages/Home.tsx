import React from 'react';

const Home = (props: {name: string}) => {

    return (
        <div>
            Hola {props.name ? props.name: 'no estas autenticado'}
        </div>
    )
}

export default Home;