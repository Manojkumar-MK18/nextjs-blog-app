import Contact from "@/components/contact";

export async function generateMetadata() {
  return { title: "Contact Us" };
}

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
