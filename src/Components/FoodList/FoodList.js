import FetchFoodList from "./FetchFoodList";
import FoodCard from "./FoodCard";
import './foodlist.css'

const FoodList = () => {

  const foodValue = FetchFoodList();

  return (
    <div className="row">
      <FoodCard foodValue={foodValue} />
    </div>
  );
};

export default FoodList;
