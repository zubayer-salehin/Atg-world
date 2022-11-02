import React from 'react';
import Banner from './Banner/Banner';
import Post from './Post/Post';


const Home = () => {
    return (
        <div style={{"overflowX":"hidden"}}>
            <Banner></Banner>
            <Post></Post>
        </div>
    );
};

export default Home;