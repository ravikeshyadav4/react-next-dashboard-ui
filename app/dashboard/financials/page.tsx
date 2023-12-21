"use client"

import useFetch from "@/src/utils/useFetch";
import { type } from "os";

type APIResponse = {
  userId:	number;
  id:	number;
  title:	String;
  completed: boolean;
}

export default function Page() {
  const { data, loading, error } = useFetch<{ title: String }>(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(data);
  
  return <p>Data: {data?.title}</p>;
  // return <p>Data: {data?.response?.id?.toString()} {data?.response?.userId?.toString()} {data?.response?.title} {data?.response?.completed}</p>;
    // return <h1 className="mb-4 pt-5 text-xl md:text-2xl">Financial</h1>
  }