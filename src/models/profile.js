import mongoose from "mongoose"
import ExperienceSchema from "./experiences.js"

const { Schema, model, ObjectId } = mongoose

const ProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    experiences: [ExperienceSchema],
    posts: [{ type: ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
)

export default model("Profile", ProfileSchema)
