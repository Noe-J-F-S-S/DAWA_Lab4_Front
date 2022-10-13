import { useEffect } from "react";
import "./index.css";

const Message = ({ senderUser, messages }) => {
  const localUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log("entrando a message");
  }, []);

  const mensaje1 ={
    padding: "12px",
    width: "300px",
    height: "60px",
    overflow: "auto",
    backgroundColor: "rgb(194, 255, 230)",
    borderRadius: "8px",
    marginTop: "-10px"}

  const mensaje2 ={
    padding: "12px",
    width: "300px",
    height: "60px",
    overflow: "auto",
    backgroundColor: "rgb(3, 102, 61)",
    borderRadius: "8px",
    marginTop: "-10px"}

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className="message__content__text">
          <div className="message__content__image">
            <img
              width={45}
              src={
                senderUser.name === message.User.name
                  ? localUser.profile_url
                  : senderUser.profile_url
              }
            />
          </div>
          <div className="message__content__message">
            <p className="c__name">
              {senderUser.name === message.User.name
                ? localUser.name
                : senderUser.name}
            </p>
            <p style={senderUser.name === message.User.name
              ? mensaje1
              : mensaje2} className="c__message">{message.message}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Message;