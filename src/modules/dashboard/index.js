// import Avatar from '@mui/material/Avatar';
import React from "react";
import LeftDiv from "./leftDiv";
import ChatBox from "./chatBox";
import users from "../../data/users"

const Dashboard = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="h-screen w-[25%] bg-secondary border border-gray-300">
        <LeftDiv users={users}/>
      </div>
      <div className="h-screen w-[75%] bg-white ">
        <ChatBox/>
      </div>
    </div>
  );
};

export default Dashboard;
