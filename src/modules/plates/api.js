//handle plates endpoint to use in frontend
import { requestHelper } from "../../utils/api";

export const getPlatesRequest = () => {
  return requestHelper("http://localhost:3001/plates/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
