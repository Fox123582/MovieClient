import React from 'react';
import './trailer.css'
import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";

function Trailer() {
    let params = useParams()
    let key = params.ytTrailerId
    console.log(key)
    return (
        <div className={'react-player-container'}>
            {/*<ReactPlayer controls='true' playing={true} url={ `https://www.youtube.com/watch?v=${key}`}*/}
            {/*             width = '100%' height = '100%'/>*/}
            {/*{(key !== null) ? <ReactPlayer controls='true' playing={true} url={ `https://www.youtube.com/watch?v=${key}`}*/}
            {/*                               width = '100%' height = '100%'/> : null}*/}
            {/*{(key!=null)?<ReactPlayer controls="true" playing={true} url ={`https://www.youtube.com/watch?v=${key}`}*/}
            {/*                          width = '100%' height='100%' />:null}*/}
            <div className="react-player-container">
                {(key!=null)?<ReactPlayer controls="true" playing={true} url ={`https://www.youtube.com/watch?v=${key}`}
                                          width = '100%' height='100%' />:null}
            </div>

        </div>
    );
}

export default Trailer;