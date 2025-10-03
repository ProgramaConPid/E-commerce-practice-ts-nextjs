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
    console.error(e)
  }
}

// PUT HTTP REQUEST
export const updateProperty = async(id: string, name: string, value: number, img: string) => {
  const newPropertyValues = {
    name, 
    value, 
    img
  }

  console.log(id, newPropertyValues)
  try {
    const res = await axios.put(`${API_URL}?id=${id}`, newPropertyValues)
    
    if (!res.data.ok) {
      throw new Error(`Error, cannot update the property with ID: ${id}`)
    } 
  } catch(e) {
    console.error(e)
  }
}

// DELETE HTTP REQUEST
export const deleteProperty = async(id: string) => {
  try {
    const res = await axios.delete(`${API_URL}?id=${id}`)

    if (!res.data.ok) {
      throw new Error("Error, cannor delete the propertie")
    } else {
      return console.log(res.data)
    }
  } catch(e) {
    console.error(e);
  }
}