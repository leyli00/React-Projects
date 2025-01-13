import './ChannelCard.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Avatar } from '@mui/material';

export default function ChannelCard({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className='channel-card'>
            <Avatar className='channelCardLogo' src={image} />
            <div className="channelCardText">
                <h4>
                    {channel} {verified && <CheckCircleIcon style={{ color: 'gray' }} />}
                </h4>

                <p>
                    {subs} subscribers . {noOfVideos} videos
                </p>

                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}