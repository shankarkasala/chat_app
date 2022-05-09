import React from "react";
import "./Chat.css";
function Chat() {
  return (
    <div className="chat-container">
      <div className="chat-left">
        <div className="chat-channel-search">
          <input className="channal-input" type="text" />
        </div>
        <div className="chat-channals">
          <div className="channal-1">
            <div className="avathar"></div>
            <div className="channal">channel-1</div>
          </div>
          <div className="channal-1">
            <div className="avathar"></div>
            <div className="channal">channel-2</div>
          </div>
          <div className="channal-1">
            <div className="avathar"></div>
            <div className="channal">channel-3</div>
          </div>
          <div className="channal-1">
            <div className="avathar"></div>
            <div className="channal">channel-4</div>
          </div>
          <div className="channal-1">
            <div className="avathar"></div>
            <div className="channal">channel-5</div>
          </div>
        </div>
      </div>
      <div className="chat-right">
        <div className="chatting-field-container">
          <input className="chatting-field" type="text" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
