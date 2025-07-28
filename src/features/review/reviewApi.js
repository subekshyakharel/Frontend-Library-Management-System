import { apiProcessor } from "../../services/api";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const reviewApiEP = apiBaseUrl + "/api/v1/review";

export const postNewReviewApi = async (payload) => {
  const obj = {
    method: "post",
    url: reviewApiEP,
    // showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};

export const fetchAllReviewsApi = async (isAdmin) => {
  const path = isAdmin ? "/admin" : "";
  const obj = {
    method: "get",
    url: reviewApiEP + path,
    // showToast: true,
    isPrivateCall: isAdmin,
  };
  const result = await apiProcessor(obj);
  return result;
};

export const updateReviewStatusApi = async (payload) => {
  const obj = {
    method: "patch",
    url: reviewApiEP + "/admin",
    // showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
