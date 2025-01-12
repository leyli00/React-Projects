import React from 'react'
import { Link } from 'react-router-dom'
import './VideoCard.css'

function VideoCard({ image, title, channel, views, timestamp, channelImage, path }) {
    return (
        <Link to={path} className='video-card' style={{ textDecoration: 'none' }} >
            <img src={image} alt="" className='videoCardImage' />
            <div className='videoCardInfo'>
                <img src={channelImage} alt="" className='videoCardAvatar' />
                <div className='videoCardText'>
                    <h4> {title} </h4>
                    <p> {channel} </p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard