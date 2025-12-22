import mongoose, { mongo, Schema, Types } from "mongoose"

// first we have to create a schema as a blueprint for the data to be stored in the database
// then we need to create a model based on the schema we have created 

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // this will by default provide the created at and updated at timestamps
);

const Note = mongoose.model("Note",noteSchema)

export default Note