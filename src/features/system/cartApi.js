import { apiProcessor } from "../../services/api";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const userApiEP = apiBaseUrl + "/api/v1/borrow";

export const postBorrowApi = async (payload) => {
  const obj = {
    method: "post",
    url: userApiEP,
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
