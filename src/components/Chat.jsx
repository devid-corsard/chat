import React from 'react';
import Camera from '../img/video-camera-alt.png';
import AddUser from '../img/user-add.png';
import More from '../img/menu-dots.png';
import Messages from './Messages';
import Input from './Input';


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={AddUser} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat