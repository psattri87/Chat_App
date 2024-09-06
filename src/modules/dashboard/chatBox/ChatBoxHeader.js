import React from "react";
import avtarIcon from "../../../assets/avtar.svg";
import { ReactComponent as CallIcon } from "../../../assets/call_icon.svg";
import { FiPhoneCall } from "react-icons/fi";

const ChatBoxHeader = () => {
  return (
    <div className="flex w-full">
      <img src={avtarIcon} width={50} alt="avtar" />
      <div className="ml-4 mr-auto">
        <h3 className="text-lg font-medium">Alon</h3>
        <p className="text-sm font-light">Online</p>
      </div>
      <div className="px-3 rounded-md hover:bg-iconBg flex justify-center items-center">
        <FiPhoneCall className="text-iconColor w-6 h-6 cursor-pointer " strokeWidth="1.25"/>
      </div>
    </div>
  );
};

export default ChatBoxHeader;
