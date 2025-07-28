import { apiProcessor } from "./api";

const apiBaseUrl =
  "https://library-management-system-backend-cnkg.onrender.com";
const authApiEP = apiBaseUrl + "/api/v1/auth";

export const signUpNewUserApi = async (payload) => {
  try {
    const obj = {
      method: "post",
      url: authApiEP + "/register",
      payload,
      showToast: true,
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
export const activateUserApi = async (payload) => {
  try {
    const obj = {
      method: "post",
      url: authApiEP + "/activate-user",
      payload,
    };
    return apiProcessor(obj);
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUserApi = async (payload) => {
  try {
    const obj = {
      method: "post",
      url: authApiEP + "/login",
      payload,
      showToast: true,
    };
    return apiProcessor(obj);
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      message: error.message,
    };
  }
};

//request new accessJwt api
export const fetchNewAccessJWtApi = async () => {
  try {
    const obj = {
      method: "get",
      url: authApiEP + "/renew-jwt",
      isPrivateCall: true,
      isRefreshJwt: true,
    };
    return apiProcessor(obj);
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const logoutUserApi = async () => {
  const obj = {
    method: "get",
    url: authApiEP + "/logout",
    isPrivateCall: true,
  };
  return apiProcessor(obj);
};

export const requestPassResetApi = async (payload) => {
  const obj = {
    method: "post",
    url: authApiEP + "/otp",
    payload,
  };
  return apiProcessor(obj);
};

export const resetPassApi = async (payload) => {
  const obj = {
    method: "post",
    url: authApiEP + "/reset-password",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
