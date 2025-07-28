import { apiProcessor } from "../../services/api";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const borrowApiEP = apiBaseUrl + "/api/v1/borrow";

// for admin only
export const fetchAllBorrowApi = async ({ isAdmin }) => {
  const path = isAdmin ? "/admin" : "/user";
  const obj = {
    method: "get",
    url: borrowApiEP + path,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};

// for users
export const patchReturnBorrowApi = async (payload) => {
  const obj = {
    method: "patch",
    url: borrowApiEP,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
