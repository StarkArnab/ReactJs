import React from "react";

function Card({ imgsrc, title, name, link }) {
  return (
    <div className="cards">
      <div className="card">
        <img src={imgsrc} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{title}</span>
          <h3 className="card_title">{name}</h3>
          <a href={link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
