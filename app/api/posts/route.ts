import { PostModel } from "@/models/postModels";
import connectMongoose from "@/utlis/connectmongo";

async function GET() {
  await connectMongoose();
  const resposne = await PostModel.find({});
  return Response.json({ resposne: resposne });
}

export { GET };
