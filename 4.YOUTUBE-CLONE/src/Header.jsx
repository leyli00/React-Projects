import { useEffect, useState } from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Header({ toggleSidebar }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
        handleMediaChange();
        mediaQuery.addEventListener('change', handleMediaChange);
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, [])

    return (
        <div className="header">
            {!showSearch && (
                <div className="header-left">
                    <MenuIcon onClick={toggleSidebar} />
                    <Link to={'/'}>
                        <img src={logo} alt="Header Logo" className='header-logo' />
                    </Link>
                </div>
            )}
            <div className='search-input' style={{
                flex: isSmallScreen && showSearch ? 1 : isSmallScreen && 0,
                display: isSmallScreen && showSearch ? 'flex' : isSmallScreen && 'none',
                margin: 'auto'
            }} >
                <input type="text" placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <Link to={`/search/${searchQuery}`}>
                    <SearchIcon className='search-icon' />
                </Link>
            </div>
            {showSearch && (<CloseIcon className="close-btn" onClick={() => setShowSearch(false)} />)}

            {!showSearch && (
                <div className='header-icons'>
                    {isSmallScreen && !showSearch && (
                        <SearchIcon
                            className='searchToggle-icon header-icon'
                            onClick={() => {
                                setShowSearch(true);
                            }}
                        />
                    )}
                    <VideoCallIcon className='header-icon' />
                    <NotificationsIcon className='header-icon' />
                    <AccountCircleIcon className='header-icon' />
                </div>
            )}
        </div>
    )
}

export default Header