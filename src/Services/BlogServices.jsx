import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${URL}/common/blogs`);
    console.log(response.data); 
    return response.data.blogs;
  } catch (error) {
    console.error(error);
  }
}
