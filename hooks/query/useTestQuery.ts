import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
export default function useTestQuery() {
  return useQuery({
    queryKey: ["Get_all"],
    queryFn: async () => {
      return await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
    },
  });
}
