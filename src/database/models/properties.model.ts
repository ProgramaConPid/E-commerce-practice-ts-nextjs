import {Schema, model, models} from 'mongoose';

const Properties = new Schema({
  name: { type: String },
  value: { type: Number },
  img: {  type: String }
}, {
  collection: "properties"
})

const Property = models.Properties || model("Properties", Properties)

export default Property;