import React, { useState } from "react";
import Input from "../../../components/input";
import { ReactComponent as SmileIcon } from "../../../assets/mood_smile.svg";
import { ImSmile } from "react-icons/im";
import { ReactComponent as SendButton } from "../../../assets/send_button.svg";
import { BsEmojiSmile } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import { LuSendHorizonal } from "react-icons/lu";
import EmojiPicker from "emoji-picker-react";
import EmojiInput from "./EmojiInput";

const ChatBoxFooter = ({ handleSend, handleChange, message }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el)=>codeArray.push("0x"+el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text+emoji)
    console.log(text);
  };

  return (
    <div className="flex0 items-center w-full">
      <div
        className="p-3 rounded-md hover:bg-iconBg flex items-center justify-center"
        onClick={()=>setShowEmoji(!showEmoji)}
      >
        <BsEmojiSmile className="h-5 w-5 text-gray-600" />
      </div>
      {showEmoji && <div className="absolute bottom-[10%]" >
        <EmojiPicker height={400} width={400} onEmojiClick={addEmoji} />
      </div>}
      {/* {()=>handleChange(`${message} ${getEmoji}`) } */}
      <div>
      <EmojiPicker open={false} />
      </div>
      
      <Input
        name="messageBox"
        placeholder="Type a message"
        className="mr-auto w-full px-2"
        inputClassName="border-none bg-transparent focus:outline-none font-normal"
        value={message}
        onChange={handleChange}
      />
      <div className="p-3 rounded-md hover:bg-iconBg" onClick={handleSend}>
        <LuSendHorizonal
          className="h-5 w-5 text-gray-600 "
          strokeWidth="1.25"
        />
      </div>
    </div>
  );
};

export default ChatBoxFooter;
