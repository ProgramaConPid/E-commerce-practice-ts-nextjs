import moongose from 'mongoose';

const Properties = new moongose.Schema({
  name: { type: String },
  value: { type: Number },
  img: {  type: String }
}, {
  collection: "properties"
})

export const Property = moongose.model("Properties", Properties)

