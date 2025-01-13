import ChannelCard from './ChannelCard';
import SearchedVideoCard from './SearchedVideoCard';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';

export default function SearchPage() {
    return <div className='search-page'>
        <div className='serachPageFilter'>
            <TuneIcon />
            <h2>Filter</h2>
        </div>
        <hr />
        <ChannelCard
            image='https://fastly.picsum.photos/id/200/200/300.jpg?hmac=XVCLpc2Ddr652IrKMt3L7jISDD4au5O9ZIr3fwBtxo8'
            channel='Leyli Hudayberdiyeva'
            verified
            subs='1M'
            noOfVideos={20}
            description={'Build your Carrier here.'} />
        <hr />

        <SearchedVideoCard
            title='How to become a web developer'
            views='2.3M'
            timestamp='3 days ago'
            subs='1M'
            channelImage='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
            description='In this video we are gonna learn how to make a text small'
            channel='Md Adil Hossain'
            image='https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4='
        />

    </div>

}