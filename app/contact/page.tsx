import Contact from "@/components/contact";

export async function generateMetadata() {
  return { title: "Contact us" };
}

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
