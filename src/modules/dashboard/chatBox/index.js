import React, { useState, useRef, useEffect } from "react";
import MsgBox from "../../../components/MsgBox";
import Input from "../../../components/input";
import { BsEmojiSmile } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import ChatBoxHeader from "./ChatBoxHeader";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [msgList, setMsgList] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const inputRef = useRef(null);
  const currentMsgRef = useRef(null);
  const emojiRef = useRef(null);
  const emojiRef2 = useRef(null);

  const handleSend = () => {
    if (message.trimStart().length) {
      let hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours === 12 ? 12 : hours % 12;
      const timeStamp = `${hours}:${minutes} ${ampm}`;

      setMsgList([
        ...msgList,
        { senderName: "other", timeStamp: timeStamp, text: message.trim() },
      ]);
      setMessage("");
      setShowEmoji(false);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    setShowEmoji(false);
    if (event.key === "Enter") {
      document.getElementById("sendButton").click();
    }
  };

  const addEmoji = (e) => {
    if (e.unified) {
      let sym = e.unified.split("-");
      const codeArray = [];
      sym.forEach((element) => {
        codeArray.push("0x" + element);
      });
      let emoji = String.fromCodePoint(...codeArray);
      setMessage((msg) => msg + emoji);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        if(emojiRef2.current && !emojiRef2.current.contains(event.target)){

          console.log("Clicked outside!");
          inputRef.current.focus();
          setShowEmoji(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [emojiRef]);

  useEffect(() => {
    if (currentMsgRef.current) {
      currentMsgRef.current.scrollIntoView();
    }
  }, [msgList]);

  return (
    <div className="h-full">
      <div className="w-full bg-gray-100 flex items-center px-8 py-4 h-[10%] shadow-md ">
        <ChatBoxHeader />
      </div>
      <div
        id="messageBody"
        className="p-6 h-[80%] w-full overflow-y-scroll  space-y-2 border shadow-inner"
      >
        {msgList.map((msg, idx) => {
          return (
            <MsgBox
              key={idx}
              text={msg.text}
              isSelfSender={msg.sender === "self"}
              timeStamp={msg.timeStamp}
              currentMsgRef={currentMsgRef}
            />
          );
        })}
      </div>
      <div className="w-full bg-gray-100 flex items-center px-4 py-4 h-[10%]">
        <div
          id="smileButton"
          ref={emojiRef2}
          className="p-3 rounded-md hover:bg-iconBg flex items-center justify-center"
          onClick={() => {
            setShowEmoji(!showEmoji);
            // if (!showEmoji) {
            //   inputRef.current.focus();
            // }
          }}
        >
          <BsEmojiSmile className="h-5 w-5 text-gray-600" />
        </div>
        {showEmoji && (
          <div className="absolute bottom-[10%]" ref={emojiRef}>
            <Picker data={data} onEmojiSelect={addEmoji} />
          </div>
        )}

        <Input
          name="inputMessage"
          myRef={inputRef}
          placeholder="Type a message"
          className="mr-auto w-full px-2"
          inputClassName="border-none bg-transparent focus:outline-none font-normal"
          value={message}
          onChange={handleChange}
          handleKeyDown={handleKeyDown}
        />
        <div
          id="sendButton"
          className="p-3 rounded-md disabled:hover:bg-gray-300 hover:bg-iconBg"
          onClick={handleSend}
        >
          <LuSendHorizonal
            className="h-5 w-5 text-gray-600 "
            strokeWidth="1.25"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
