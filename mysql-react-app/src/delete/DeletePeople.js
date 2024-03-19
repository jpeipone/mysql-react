import React from "react";
import axios from "axios";

export const DeletePeople = async ({ id }) => {
  //const id_number = Number(id);
  try {
    await axios.delete(`http://localhost:7700/deletePeople/${id}`);
    console.log("deleted people id: ", id);
  } catch (error) {
    console.error("Couldn't delete people from mysql: ", error);
  }
};
