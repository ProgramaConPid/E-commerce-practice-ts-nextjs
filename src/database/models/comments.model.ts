import mongoose from "mongoose"

// Create the schema Comments related to the one that exist on database sample_mflix
const Comments = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  text: {type: String},
  date: {type: Date}
}, {
 collection: "comments"
})

// Create the model based on the schema Comments
export const Comment = mongoose.model("Comment", Comments)