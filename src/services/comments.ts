import axios from "axios"

const API_URL = 'http://localhost:3000/api/comments';

export const getComments = async() => {
  const response = await axios.get(API_URL)
  return response.data
}