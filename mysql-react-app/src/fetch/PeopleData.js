import React from "react";
import "./PeopleData.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { DeletePeople } from "../delete/DeletePeople";

const PeopleData = () => {
  const [peopleTable, setPeopleTable] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7700/people/")
      .then((res) => {
        // console.log(res?.data);
        setPeopleTable(res?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log("axios fetch people table: ", peopleTable);
  const handleDeletePeople = async ({ id }) => {
    // await DeletePeople({ id });
    try {
      await axios.delete(`http://localhost:7700/deletePeople/${id}`);
      console.log("deleted people id: ", id);
    } catch (error) {
      console.error("Couldn't delete people from mysql: ", error);
    }
    console.log("delete id", id);
  };

  //test post
  const handlePostPeople = async () => {
    try {
      await axios.post(`http://localhost:7700/addPerson`, {
        NameP: "juu",
        Phone: 54534,
        Email: "muhuukku@gmail.coin",
      });
    } catch (error) {
      console.error("Couldn't post people into mysql: ", error);
    }
  };

  //test update
  // let updateid = 10;
  const handlePutPeople = async (updateid) => {
    try {
      await axios.put(`http://localhost:7700/people/${updateid}`, {
        NameP: "kymppi",
        Phone: 420420,
        Email: "kymppy@gmail.com",
      });
    } catch (error) {
      console.error("update people didn't work", error);
    }
  };

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th></th>
        </tr>
        {peopleTable.map((people) => {
          return (
            <tr key={people?.PeopleId}>
              <td>{people?.PeopleId}</td>
              <td>{people?.NameP}</td>
              <td>{people?.Phone}</td>
              <td>{people?.Email}</td>
              <td>
                <button
                  className="delete__btn"
                  onClick={() => handleDeletePeople(people?.PeopleId)}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <button onClick={() => handlePostPeople()}>post test</button>
      <button onClick={() => handlePutPeople(10)}>put test</button>
    </div>
  );
};

export default PeopleData;
