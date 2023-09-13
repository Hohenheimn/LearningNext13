import { getCookie } from "cookies-next";
import { useQuery } from "react-query";

import api from "./api";

export const fetchData = (queryName: any[], endpoint: string) => {
  return useQuery(queryName, () => {
    return api.get(`${endpoint}`, {
      headers: {
        Authorization: "Bearer " + getCookie("user"),
      },
    });
  });
};
