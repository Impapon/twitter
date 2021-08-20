import React, { useState } from 'react';
import './TweetBody.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload, faHeart, faRetweet, faSms} from '@fortawesome/free-solid-svg-icons'


const TweetBody = (props) => {
  const [love,setLove] = useState(0)
  const [retweet,setRetweet] =useState(0)

    return (
        <div className="eatch-tweet-body-container">
            <h1>{props.tweet.name}</h1>
            <p>{props.tweet.description}</p>
            <div className="icon-handle">
                <button>
                    <FontAwesomeIcon icon={faSms}/>
                    </button>
                    <button onClick={()=> setRetweet(retweet+1)}>
                    <FontAwesomeIcon icon={faRetweet}/> &nbsp;&nbsp;{retweet}
                    </button>
                <button onClick={()=> setLove(love+1)}>
                    <FontAwesomeIcon icon={faHeart}/> &nbsp;&nbsp; {love}
                    </button>
                <button>
                    <FontAwesomeIcon icon={faDownload}/>
                    </button>
            </div>
        </div>
    );
};



export default TweetBody;