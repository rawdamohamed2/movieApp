import { createContext, useState } from "react";

export const MessageContext = createContext();

function MessageProvider({ children }) {
  const [message, setMessage] = useState("");

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <MessageContext.Provider value={{ message, showMessage }}>
      {children}
      {message && (
        <div className="absolute top-20 right-10 min-w-[200px] h-[50px] p-5 flex justify-center items-center bg-background border-2 border-active text-white z-50">
          {message}
        </div>
      )}
    </MessageContext.Provider>
  );
}

export default MessageProvider;
