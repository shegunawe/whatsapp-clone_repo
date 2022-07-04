import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import {} from "@mui/icons-material/";
import {
  Chat,
  DonutLargeOutlined,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import db from "../firebase.js";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const Sidebar = () => {
  const colRef = collection(db, "rooms");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setRooms(
        snapshot.docs.forEach((doc) =>
        {
          ({ ...doc.data(), id: doc.id })
        }
        )
      )    
    });
  }, []);
  console.log(rooms);

  return (
    <div className=" flex flex-col w-1/3">
      <div className="flex justify-between p-3 border-r-2 border-gray-200 h-fit">
        <Avatar />
        <div className="flex items-center ">
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center h-10 p-3 bg-slate-200">
        <div className="flex items-center bg-white w-full h-9 rounded-3xl">
          <div className="text-gray-400 p-3">
            <SearchOutlined />
          </div>
          <input
            type="text"
            placeholder="Search or start new chat"
            className=" border-none text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-white overflow-y-auto scrollbar-hide">
        <SidebarChat addNewChat />
        {rooms?.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
