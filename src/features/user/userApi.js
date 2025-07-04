import { apiProcessor } from "../../services/api";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const userApiEP = apiBaseUrl + "/api/v1/users";

//call api processor to fetch the user
export const fetchUserApi = async () => {
  try {
    const obj = {
      method: "get",
      url: userApiEP + "/profile",
      showToast: false,
      isPrivateCall: true,
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
