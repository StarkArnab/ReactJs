import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ ele }) => {
  const { id, image, name, number_of_votes, price_starts_from, rating, type } =
    ele;
  const navigate = useNavigate();
  return <div onClick={()=>{navigate(`/restaurant/${id}`)}} className="restaurant_card" >
    <img className="image" src={image} alt="" />
    <h3 className="name" >{name}</h3>
    <h4 className="type" >{type}</h4>
    <p className="votes" >{number_of_votes}</p>
    <p className="price" >{price_starts_from}</p>
    <p className="rating" >{rating}</p>
  </div>;
};

export default RestaurantCard;
