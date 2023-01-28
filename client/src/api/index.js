import axios from "axios";

// Storing our base url
const baseUrl = "http://localhost:5000/";

// Here im going to keep
export const validateUser = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}auth/login`, {
      params: {
        token,
      },
    });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
