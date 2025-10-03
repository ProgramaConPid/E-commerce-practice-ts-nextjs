import axios from "axios"

const API_URL = 'http://localhost:3000/api/properties';

// GET HTTP REQUEST
export const getProperties = async() => {
  const response = await axios.get(API_URL)
  return response.data
}

// POST HTTP REQUEST
export const createProperty = async(name:string, value:number, img:string) => {
  try {
    const newProperty = {
      name: name,
      value: value,
      img: img
    }
  
    const response = await axios.post(API_URL, newProperty)
    if (!response.data.ok) {
      throw new Error("Error, cannot create the comment")
    } else {
      return response.data
    }
  } catch(e) {
    alert(e)
  }
}