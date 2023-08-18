import React, {useEffect, useRef} from 'react';
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import ReviewForm from "../reviewForm/reviewForm";
import api from '../../api/axiosConfig'
import {nanoid} from "nanoid";
function Reviews({getMovieData, movie, reviews, setReviews}) {

    const revText = useRef()
    let params = useParams()
    const movieId = params.movieId

    useEffect(()=>{
        getMovieData(movieId)
    },[])

    const addReview = async (e) =>{
        e.preventDefault()

        const rev = revText.current

        // let allReviews = reviews.map(el => {
        //     return el.body
        // // })
        console.log(reviews)

        const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

        const updateReviews  = [...reviews,{body:rev.value}]

        rev.value = ''
        setReviews(updateReviews)


    }


    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className={'mt-2'}>
                <Col>
                    <img src={movie?.poster} alt={''}/>
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit = {addReview} revText = {revText} labelText = {'Write a Review?'}></ReviewForm>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr/>
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r)=>{
                            return (
                                <div key={nanoid()}>
                                    <Row >
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </div>
                            )})
                        })
                    }
                </Col>

            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
}

export default Reviews;