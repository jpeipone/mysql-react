import { useState, useEffect } from "react";
import axios from "axios";
import { getCoders } from "./getCoders";

const TestFile = async () => {
  /*  const [coders, setCoders] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCoders();
        setCoders(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []); */

  return <div>TestFile</div>;
};

export default TestFile;
