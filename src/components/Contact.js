import React from "react";
import"./Contact.css";

function Contact({ name, avatar, online, life, power, speed, combo, special }) {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt={name} />
      <div>
        <h1 className="name">{name}</h1>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"} />
          <p className="status-text">{online ? "Mastered" : "Normal"}</p>
        </div>
        <p>Life: {life}</p>
        <p>Power: {power}</p>
        <p>Speed: {speed}</p>
        <p>Combo: {combo}</p>
        <p>Special: {special}</p>
      </div>
    </div>
  );
}

export default Contact;