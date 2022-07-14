import mongoose from "mongoose";

const Model =  new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true}
});

export default mongoose.model('Model', Model);