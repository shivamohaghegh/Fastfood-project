import axios from "axios";
import { useEffect, useState } from "react";

const FetchFoodList = () => {
  const [foodValue, setFoodValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6844019c71eb5d1be032236c.mockapi.io/FoodList"
        );
        if (Array.isArray(response.data)) {
          setFoodValue(response.data);
        } else {
          console.warn("something went wrong hon!!1");
          setFoodValue([]);
        }
      } catch (error) {
        console.error("something went wrong hon!!1");
        setFoodValue([]);
      }
    };
    fetchData()
  }, []);
  return foodValue
};

export default FetchFoodList