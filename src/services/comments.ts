import axios from "axios"

const API_URL = 'http://localhost:3000/api/comments';

// GET HTTP REQUEST
export const getComments = async() => {
  const response = await axios.get(API_URL)
  return response.data
}

// POST HTTP REQUEST
export const createComment = async(name:string, text:string) => {
  try {
    const newComment = {
      name: name,
      text: text
    }
  
    const response = await axios.post(API_URL, newComment)
    if (!response.data.ok) {
      throw new Error("Error, cannot create the comment")
    } else {
      return response.data
    }
  } catch(e) {
    alert(e)
  }
}