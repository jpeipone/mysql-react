import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const NewData = () => {
  const [mysqlData, setMysqlData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7700/koodari/")
      .then((res) => {
        console.log(res?.data);
        setMysqlData(res?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("axios sai tiedon: ", mysqlData);

  return <div>NewData</div>;
};

export default NewData;
