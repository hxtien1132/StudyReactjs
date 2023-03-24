import React from 'react';
import { YoutubeData } from '../../Data';
import YoutubeItem from './Youtube-Item'
const Youtubelist = (props) => {
    return (
        <div className='youtube-list'>
            {props.children}
        {  YoutubeData.map((item,index) =>(
            <YoutubeItem key={item.id} 
            image ={item.image}
             avatar={item.avatar || item.image} 
            title= {item.title} 
            author={item.author}
            className={'bac'}
            ></YoutubeItem>
        ))
        }
      </div>
    );
};

export default Youtubelist;