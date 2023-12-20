"use client";

import { MessengerChat } from "react-messenger-chat-plugin";

const ChatBoxMesseger = () => {
  return (
    <MessengerChat
      pageId="204082679699567"
      language="vi"
      themeColor={"#000000"}
      loggedInGreeting="Xin chào! Hãy chat với chúng tôi"
      loggedOutGreeting="Xin chào! Hãy chat với chúng tôi"
      greetingDialogDisplay={"show"}
      debugMode={true}
    />
  );
};

export default ChatBoxMesseger;
