import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const EmojiInput = () => {
  const [text, setText] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setText(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type a message" 
      />
      <button onClick={() => setShowPicker(val => !val)}>
        {showPicker ? 'Close' : 'Open'} Emoji Picker
      </button>
      {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
    </div>
  );
};

export default EmojiInput;
