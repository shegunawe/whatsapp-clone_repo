import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'

const SidebarChat = ({id, name, addNewChat }) => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
 
    const createChat = () => { 
      const roomName = prompt("Please enter name for chat");

      if (roomName) {
        
      }
    };

  return !addNewChat ? (
      <div className="flex p-4 cursor-pointer border-b border-gray-200 hover:bg-gray-200">
         <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/> 
         <div className="ml-4">
        <p className=" text-sm font-semibold mb-2">{name}</p>
              <p>Last message...</p>
         </div>
    </div>
  ) : (
          <div onClick={createChat} className="flex p-4 cursor-pointer border-b border-gray-200  hover:bg-gray-200">
              <h2 >Add new Chat</h2>
          </div>
  )
}

export default SidebarChat