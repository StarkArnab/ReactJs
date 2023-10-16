import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RestaurantCard from "../Components/RestaurantCard";
import RestaurantPage from "../Pages/RestaurantPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} >HomePage</Route>
      <Route path="/restaurant/:id" element={<RestaurantPage/>} >restaurant</Route>
    </Routes>
  );
};

export default AllRoutes;
