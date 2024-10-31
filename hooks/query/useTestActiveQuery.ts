import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
export default function useTestActiveQuery() {
  return useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      return await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    },
  });
}
