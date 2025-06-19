import { apiProcessor } from "../../services/api";

const apiBaseUrl = "http://localhost:8001";
const userApiEP = apiBaseUrl + "/api/v1/users";

//call api processor to fetch the user
export const fetchUserApi = async () => {
  try {
    const obj = {
      get: "post",
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
