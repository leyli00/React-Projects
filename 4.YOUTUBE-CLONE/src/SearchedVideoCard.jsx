import './SearchedVideoCard.css';

export default function SearchedVideoCard({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className='searchedVideoCard'>
            <img src={image} alt='' />
            <div className='searchedVideoCardText'>
                <h3>{title}</h3>
                <p className='searchedVideoCardHeadline'>
                    {channel} .
                    <span className='searchedVideoCardSubs'>
                        <span className='searchedVideoCardSubsNum'>{subs}</span>
                        subscribers
                    </span>
                    {views} views . {timestamp}
                </p>
                <p className='searchedVideoCardDescription'>{description}</p>
            </div>
        </div>
    )
}