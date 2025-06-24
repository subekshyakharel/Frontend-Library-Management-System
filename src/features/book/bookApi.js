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
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      message: error.message,
    };
  }
};
