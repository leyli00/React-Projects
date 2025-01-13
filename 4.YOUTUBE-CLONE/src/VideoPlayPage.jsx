import { useEffect, useState } from 'react';
import './VideoPlayPage.css';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'

export default function VideoPlayPage() {

    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { videoId } = useParams();

    useEffect(() => {
        const fetchVideo = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/videos/${videoId}`);
                if (!response.ok) {
                    throw new Error(response.status)
                }
                const data = await response.json();
                setVideo(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchVideo();
    }, [videoId])
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <div> {error} </div>
    }

    if (!video) {
        <div>Vİdeo not found!</div>
    }


    return (
        <div className='playPageContainer'>
            <div className="playPage">
                <div className="playerContainer">
                    <ReactPlayer url={video?.url} controls width='100%' height='100%' />
                </div>
                <div className="infos">
                    <div className="channelCover">
                        <div className="channelInfo">
                            <img className='channelAvatar' src={video.channelImage} alt="" />
                            <div className="channelText">
                                <h4> {video.channel} </h4>
                                <p>1000 Subscribers</p>
                            </div>
                            <p className='sbsBtn'>SUBSCRIBE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}