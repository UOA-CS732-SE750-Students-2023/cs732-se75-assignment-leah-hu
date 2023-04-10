import { useState, useEffect } from "react";

const useFetchData = () => {
  const [foodInfo, setFoodInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/oseparovic/fodmap_list/master/fodmap_repo.json"
      );
      const responseJSON = await response.json();
      setFoodInfo(responseJSON);
    } catch (error) {
      console.error(error);
    }
  }
  
  return { foodInfo, setFoodInfo };
};

export default useFetchData;
