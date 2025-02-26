import React, { useEffect, useState } from 'react'
import './HomeVideos.css'
import VideoCard from './VideoCard';
import SkeletonLoader from './SkeletonLoader';

function HomeVideos() {

    const [page, setPage] = useState(1);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [end, setEnd] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:3000/videos?_page=${page}&_limit=5`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const dataArr = await response.json();
                if (!dataArr) {
                    setError("Data net received");
                }
                if (dataArr.length < 1) {
                    setEnd(true);
                }
                setVideos(prev => [...prev, ...dataArr]);
            } catch (error) {
                setError(`Error fetching Data : ${error.message}`)
            } finally {
                setLoading(false);
            }
        };
        fetchData()
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            if (!end) {
                setPage(prev => prev + 1);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    if (loading && page === 1) {
        return <SkeletonLoader />
    }
    if (error) {
        return <p> {error} </p>
    }

    return (
        <div className='home-videos'>
            <h2>Recommended</h2>
            <div className='homeVideoItem'>
                {
                    videos.map(item => {
                        return <VideoCard key={item.id}
                            title={item.title}
                            views={item.views}
                            timestamp={item.timestamp}
                            channelImage={item.channelImage}
                            channel={item.channel}
                            image={item.image}
                            path={`/videoplaypage/${item.id}`} />
                    })
                }
                {loading && page !== 1 && <SkeletonLoader />}

            </div>
        </div>
    );
}

export default HomeVideos

