// import React, { useContext } from 'react'
// import { AuthContext } from '../context/AuthContext';
// import { ChatContext } from '../context/ChatContext';

// const Message = ({message}) => {
//   const {currentUser}=useContext(AuthContext);
//   const {data}=useContext(ChatContext);
//   console.log(message);
//   return (
//     <div className='message owner'>
//       <div className="messageInfo">
//         <img src={}
//         alt="" />
//         <span>Just now</span>
//       </div>
//       <div className="messageContent">
//         <p>hello</p>
//         <img src="https://img.freepik.com/premium-photo/female-student-graduate-is-standing-university-hall-mantle-smiling-with-diploma-hands_115086-791.jpg?w=360"
//         alt=" " />
//       </div>
//     </div>
//   )
// }

// export default Message;


import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;