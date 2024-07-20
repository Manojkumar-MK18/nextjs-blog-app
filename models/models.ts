import { model, Schema, models } from "mongoose";

const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

const contactSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

const PostModel = models.posts || model("posts", postSchema);
const ContactModal = models.contact || model("contact", contactSchema);

export { PostModel, ContactModal };
