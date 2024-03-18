import { useState, useEffect } from "react";
import axios from "axios";

const AxiosGet = async () => {
  const [coders, setCoders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:7700/people/");
        console.log("Response from server:", res.data);
        setCoders(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("axios got", coders, loading, error);

  return <div>TestFile</div>;
};

export default AxiosGet;
