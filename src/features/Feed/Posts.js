import React from 'react'
import { Avatar } from '@mui/material'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Posts.css'
import InputOption from './InputOption'


function Posts({ name, description, photoUrl, message}) {
  return (
    <div className='post'>
        <div className='post__header'> 
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
            
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon}  title="Like" color="gray"/>
            <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title="Comment" color="gray"/>
            <InputOption Icon={IosShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
        </div>

    </div>
  )
}

export default Posts