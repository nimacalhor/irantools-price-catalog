
import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IMAGE_SERVICE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "api_key": process.env.API_KEY,
  },
});

export default customAxios

// input : "رسانه" ==> output: "media"
// input : "هشتگ" ==> output: "hashtag"
// input : "کاربر" ==> output: "profile"api_key