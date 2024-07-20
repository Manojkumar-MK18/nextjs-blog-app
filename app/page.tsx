import Home from "@/components/Home";

export async function generateMetadata() {
  return { title: "Home | Blog" };
}

const HomePage = () => {
  return <Home />;
};

export default HomePage;
