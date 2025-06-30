import axios from "axios";
import { useEffect, useState } from "react";

const FetchCategoryList = () => {
  const [categoryValues, setCategoryValues] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          "https://6844019c71eb5d1be032236c.mockapi.io/FoodCategory"
        );
        if (Array.isArray(response.data)) {
          setCategoryValues(response.data);          
        } else {
          console.warn("something went wrong hon!!");
          setCategoryValues([]);
        }
      } catch (error) {
        console.error("something went wrong hon!!");
        setCategoryValues([]);
      }
    };
    fetchCategoryData();
  }, []);

  return categoryValues;
};

export default FetchCategoryList;
