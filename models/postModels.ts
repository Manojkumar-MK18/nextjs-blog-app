import { model, Schema, models } from "mongoose";
console.log(models.Post,'dfdf')
const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

const PostModel = models.posts || model("posts", postSchema);

export { PostModel };
