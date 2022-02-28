import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
          <img src="http://assets.stickpng.com/images/58e91afdeb97430e81906504.png" alt="" />

          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network  "/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title="Messages" />
            <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
            <HeaderOptions avatar='https://pbs.twimg.com/profile_images/1408839946257981442/IoQr_9os_400x400.jpg' title="Me"/>
      </div>
    </div>
  )
}

export default Header