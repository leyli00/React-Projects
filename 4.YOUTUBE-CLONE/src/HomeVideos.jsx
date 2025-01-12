import React from 'react'
import './HomeVideos.css'
import VideoCard from './VideoCard';

function HomeVideos() {
    return (
        <div className='home-videos'>
            <h2>Recommended</h2>
            <div className='homeVideoItem'>
                <VideoCard
                    title={'How to become a web developer'} views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={'https://fastly.picsum.photos/id/237/500/400.jpg?hmac=PMOK_1zDgKj85s_-7JL54xstRVy7pJB64sWlsOd7b0k'}
                    channel={'Leyli Hudayberdiyeva'}
                    image={'https://fastly.picsum.photos/id/866/600/500.jpg?hmac=gPZexe_Ka6PT57YXsuSgOCP7hIHOmPc-Z_LOM8yVcoM'} />

                <VideoCard
                    title={'How to become a web developer'} views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={'https://fastly.picsum.photos/id/237/500/400.jpg?hmac=PMOK_1zDgKj85s_-7JL54xstRVy7pJB64sWlsOd7b0k'}
                    channel={'Leyli Hudayberdiyeva'}
                    image={'https://fastly.picsum.photos/id/866/600/500.jpg?hmac=gPZexe_Ka6PT57YXsuSgOCP7hIHOmPc-Z_LOM8yVcoM'} />

                <VideoCard
                    title={'How to become a web developer'} views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={'https://fastly.picsum.photos/id/237/500/400.jpg?hmac=PMOK_1zDgKj85s_-7JL54xstRVy7pJB64sWlsOd7b0k'}
                    channel={'Leyli Hudayberdiyeva'}
                    image={'https://fastly.picsum.photos/id/866/600/500.jpg?hmac=gPZexe_Ka6PT57YXsuSgOCP7hIHOmPc-Z_LOM8yVcoM'} />

                <VideoCard
                    title={'How to become a web developer'} views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={'https://fastly.picsum.photos/id/237/500/400.jpg?hmac=PMOK_1zDgKj85s_-7JL54xstRVy7pJB64sWlsOd7b0k'}
                    channel={'Leyli Hudayberdiyeva'}
                    image={'https://fastly.picsum.photos/id/866/600/500.jpg?hmac=gPZexe_Ka6PT57YXsuSgOCP7hIHOmPc-Z_LOM8yVcoM'} />
            </div>
        </div>
    );
}

export default HomeVideos

