import React from "react";
import "./Messages.css";

function Message({ children }) {
  return <div className="Message">{children}</div>;
}

export default Message;
