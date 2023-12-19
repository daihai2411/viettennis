"use client";

import { MessengerChat } from "react-messenger-chat-plugin";

const ChatBoxMesseger = () => {
  return (
    <MessengerChat
      pageId="171085149429527"
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
