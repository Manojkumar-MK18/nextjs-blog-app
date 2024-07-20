import React from "react";

export async function generateMetadata() {
  return { title: "About us" };
}

const About = () => {
  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </main>
  );
};

export default About;
