import { apiProcessor } from "../../services/api";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const bookApiEP = apiBaseUrl + "/api/v1/books";

//call api processor to fetch the user
export const postNewBookApi = async (payload) => {
  try {
    const obj = {
      method: "post",
      url: bookApiEP,
      showToast: true,
      isPrivateCall: true,
      payload,
    };
    const result = await apiProcessor(obj);
    return result;
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      message: error.message,
    };
  }
};

//for admin
export const adminFetchAllBookApi = async () => {
  const obj = {
    method: "get",
    url: bookApiEP + "/admin",
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};

//update book
export const updateBookApi = async (payload) => {
  const obj = {
    method: "put",
    url: bookApiEP,
    isPrivateCall: true,
    showToast: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};

//delete book
export const deleteBookApi = async (_id) => {
  const obj = {
    method: "delete",
    url: bookApiEP + "/" + _id,
    isPrivateCall: true,
    showToast: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
