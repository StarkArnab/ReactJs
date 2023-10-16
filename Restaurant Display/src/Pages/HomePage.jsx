import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRestaurants } from "../Redux/action";
import RestaurantCard from "../Components/RestaurantCard";
import Pagination from "../Components/Pagination";
const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageUpdate = (page) => {
    setCurrentPage(page);
  };
  const dispatch = useDispatch();
  const { restaurants, totalPages, isLoading } = useSelector((store) => store);
  console.log("data", restaurants, totalPages);
  useEffect(() => {
    dispatch(getRestaurants(currentPage));
  }, [currentPage]);

  // Show below loading indicator while data is being loaded
  if (isLoading) {
    return <h1 className="loading_indicator">Loading...</h1>;
  }

  return (
    <div>
      <div style={{ display: "flex" }} className="restaurants_wrapper">
        {/* Import RestaurantCard.jsx and populate restaurants data */}
        {restaurants?.map((ele, index) => (
          <RestaurantCard key={ele.id} ele={ele} />
        ))}
      </div>
      {/* Import Pagination.jsx and pass required props*/}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        pageUpdate={pageUpdate}
      />
    </div>
  );
};

export default HomePage;
