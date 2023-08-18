import React from 'react';
import { memo } from 'react';
import Hero from "../hero/hero";

function Home({movies}) {
    console.log(movies)
    return (
       <Hero movies = {movies}></Hero>
    );
}

export default memo(Home);