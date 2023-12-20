"use client";

import { MessengerChat } from "react-messenger-chat-plugin";

const ChatBoxMesseger = () => {
  return (
    <MessengerChat
      pageId="204082679699567"
      language="vi"
      themeColor={"#000000"}
      loggedInGreeting="loggedInGreeting"
      loggedOutGreeting="loggedOutGreeting"
      greetingDialogDisplay={"show"}
      debugMode={true}
    />
  );
};

export default ChatBoxMesseger;
