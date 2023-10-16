import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleRestaurant } from "../Redux/action";
const RestaurantPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [book, setBook] = useState(false);
  useEffect(() => {
    dispatch(getSingleRestaurant(id));
  }, []);
  const { restaurant, isLoading } = useSelector((store) => store);
  const { image, name, number_of_votes, price_starts_from, rating, type } =
    restaurant;

  console.log("single", restaurant);
  console.log("param", id);
  return (
    <div className="restaurant_single_wrapper">
      {/* Show success message here if restaurant booked successfully */}

      {book && <h1 className="success_msg" >Restaurant Booked Successfully !!</h1>}

      {/* Create Restaurant Details Card Here */}
      <div className="restaurant_single_card">
        <img className="image" src={image} alt="" />
        <h3 className="name">{name}</h3>
        <h4 className="type">{type}</h4>
        <p className="votes">{number_of_votes}</p>
        <p className="price">{price_starts_from}</p>
        <p className="rating">{rating}</p>
        {book ? (
          <Link className="go_back" to='/' >Go To Home</Link>
        ) : (
          <button onClick={()=>setBook(true)} className="book_now_btn">Book Now</button>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
