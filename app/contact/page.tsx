"use client";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [values, setValues] = useState(initialState);
  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="w-full max-w-lg">
        <div className="flex items-center mb-4">
          <label htmlFor="name" className="w-1/4">
            Name:
          </label>
          <input
            value={values?.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValues({
                ...values,
                name: e?.target?.value,
              });
            }}
            type="text"
            id="name"
            className="border rounded px-2 py-1 w-3/4"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="email" className="w-1/4">
            Email:
          </label>
          <input
            type="email"
            value={values?.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValues({
                ...values,
                email: e?.target?.value,
              });
            }}
            id="email"
            className="border rounded px-2 py-1 w-3/4"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="message" className="w-1/4">
            Message:
          </label>
          <textarea
            id="message"
            className="border rounded px-2 py-1 w-3/4"
            rows={4}
            value={values?.message}
            onChange={(e: any) => {
              setValues({
                ...values,
                message: e?.target?.value,
              });
            }}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            axios
              .post("http://localhost:3000/api/posts", {
                ...values,
              })
              .then((res) => {
                alert(res?.data?.message);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
