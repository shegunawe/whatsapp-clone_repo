import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {} from "@mui/icons-material/Mic";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  Mic,
} from "@mui/icons-material";

const Chat = ({ receiver }) => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    setInput("")
  }

  return (
    <div className="flex w-2/3 flex-col">
      <div className="p-5 flex items-center border-b border-gray-400 h-24">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="flex-1 pl-5">
          <p className="mb-1 font-medium">Room name</p>
          <p className="text-gray-300">Last seen at ...</p>
        </div>
        <div className="flex justify-between min-w-100">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="bg-scroll bg-[url('/bp-miller-314CkhgAW-8-unsplash.jpg')] p-8 overflow-y-auto flex-1 bg-center bg-cover">
        <p
          className={
            !receiver
              ? "relative p-3 bg-white text-xs rounded-xl w-fit mb-8"
              : "ml-auto relative p-3 text-xs rounded-xl w-fit mb-8 bg-emerald-300"
          }
        >
          <span className="absolute -top-4 text-xs font-semibold">
            Shegun Awe
          </span>
          Hey guys
          <span className="ml-3 text-xs">3:52pm</span>
        </p>
      </div>

      <div className="flex justify-between items-center h-14 border-t-2 border-gray-300">
         <div className="p-3 text-gray-500">
          <InsertEmoticon />
        </div>
        <form className="flex flex-1">
          <input type="text" placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-3xl p-2 border-none"/>
          <button onClick={sendMessage} type="submit" className=" hidden">Send a message</button>
        </form>
         <div className="p-3 text-gray-500">
          <Mic />
        </div>
      </div>
    </div>
  );
};

export default Chat;
