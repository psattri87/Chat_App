const MsgBox = ({ className = "", isSelfSender = false, text = "", timeStamp="", currentMsgRef }) => {
  !isSelfSender
    ? (className = "rounded-tr-xl bg-gray-100")
    : (className = "rounded-tl-xl bg-primary ml-auto text-white");
  return (
    <>
      <div className={`w-fit max-w-lg  p-3 rounded-b-xl ${className}`}>
        <p>{text}</p>
        <p className={`w-fit text-[0.65rem] font-normal ml-auto ${!isSelfSender? "text-gray-800":"text-gray-200"}`} >{timeStamp}</p>
      </div>
      <div ref={currentMsgRef}></div>
    </>
  );
};
export default MsgBox;
