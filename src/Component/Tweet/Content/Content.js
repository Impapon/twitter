import React, { useState } from 'react';
import TweetBody from '../Tweet-Body/TweetBody';

const Content = () => {
    const tweet = [{
        name: 'Mahadi hasan',
        description: 'I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel.I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel.I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel'
    },
    {
        name: 'Papon sarker',
        description: 'I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel.I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel.I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel'
    },
    {
        name: 'Emrul hasan Sifat',
        description: 'I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel.I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel.I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel'
    }

]

const [tweets,seTweets] = useState(tweet)

    return (
        <div>
            {
            tweets.map(tw => <TweetBody tweet ={tw}></TweetBody> )
            }
           
          
        </div>
    );
};

export default Content;