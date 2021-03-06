import React from 'react';
import './HeaderOptions.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && <AccountBoxIcon className="headerOption__icon" src={avatar}/>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions