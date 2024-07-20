/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState<any>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      axios
        .get(`http://localhost:3000/api/posts?search=${search}`)
        .then((res) => {
          setArticles(res?.data?.resposne);
        });
    } else {
      axios.get("http://localhost:3000/api/posts").then((res) => {
        setArticles(res?.data?.resposne);
      });
    }
  }, [search]);

  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Latest Articles</p>
      </main>
      <div className="flex justify-end px-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md bg-white"
          placeholder="Search..."
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearch(e?.target?.value);
          }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-52 py-6 overflow-auto">
        {articles?.length === 0 ? (
          <div className="flex justify-center align-middle">
            <h1 className="text-center">No Data Found..</h1>
          </div>
        ) : (
          articles?.map((data: any, index: any) => {
            return (
              <div className="border border-gray-200 p-4" key={index}>
                <img
                  className="w-full h-48 object-cover mb-4"
                  src={data?.image}
                  alt="Post Image"
                />
                <h2 className="text-xl font-semibold mb-2">{data?.title}</h2>
                <p className="text-gray-600">{data?.description}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
