import { requestHelper } from "../../utils/api";

export const getMenusRequest = () => {
  return requestHelper("http://localhost:3001/menus/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
