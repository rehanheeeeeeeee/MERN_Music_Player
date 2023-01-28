import axios from "axios";

// Storing our base url
const baseUrl = process.env.REACT_APP_BASE_URL;

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
