import axios from "axios";

export const getCoders = async () => {
  try {
    const res = await axios.get("http://localhost:7700/koodari/");
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
