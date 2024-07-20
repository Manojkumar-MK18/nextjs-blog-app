import { ContactModal, PostModel } from "@/models/models";
import connectMongoose from "@/utlis/connectmongo";

async function GET(req: any) {
  const query = req.nextUrl.searchParams.get("search");
  await connectMongoose();
  let response;
  if (query) {
    response = await PostModel.find({
      $or: [
        { title: new RegExp(query, "i") },
        { description: new RegExp(query, "i") },
      ],
    });
  } else {
    response = await PostModel.find({});
  }
  return Response.json({ resposne: response });
}

async function POST(req: any) {
  try {
     
    await connectMongoose(); 
    const { name, email, message } = await req?.json();
    const contactDetials = { name, email, message };
    console.log(contactDetials)
    await ContactModal.create(contactDetials);
    return Response.json({
      message: "Enquire Created we will get back to you soon",
    });
  } catch (e) {
    return Response.json({
      message: e
    });
 }
}

export { GET, POST };
