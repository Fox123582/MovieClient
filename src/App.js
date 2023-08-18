
import './App.css';
import api from './api/axiosConfig'
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/home";
import data from "bootstrap/js/src/dom/data";
import Header from "./components/header/header";
import Trailer from "./components/trailer/trailer";
import Reviews from "./components/reviews/reviews";

function App() {

  const [movies,setMovies] = useState([])
  const [movie,setMovie] = useState()
  const [reviews,setReviews] = useState()

  function getData () {
    api.get('/api/v1/movies')
  }

  const getMovies = async ()=>{
    try {

      const response = await api.get('/api/v1/movies')
      console.log(response.data)

      setMovies(response.data)

    } catch (err){
      console.log(err)
    }


  }

  useEffect(()=>{
    getMovies()
    // api.get('/api/v1/movies')
    //     .then(res => setMovies(res.data))

  },[])

  const getMovieData =  async (movieId) =>{
    const response = await api.get(`/api/v1/movies/${movieId}`)
    const singleMovie = response.data
    setMovie(singleMovie)

    setReviews(singleMovie.reviewIds)
  }




  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {movies ? <Route path='/' element={<Home movies={movies}/>}> </Route> : null}
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path={'/Reviews/:movieId'} element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
