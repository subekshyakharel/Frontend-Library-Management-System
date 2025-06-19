import { fetchNewAccessJWtApi } from "../../services/authApi.js";
import { fetchUserApi } from "./userApi";
import { setUser } from "./userSlice.js";

export const fetchUserAction = () => async (dispatch) => {
  // call api
  const { status, payload } = await fetchUserApi();
  //   console.log(userInfo);
  //recieve user

  //dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
  //   dispatch();
};

export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    dispatch(fetchUserAction());
  }

  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    const { payload } = await fetchNewAccessJWtApi();
    if (payload) {
      sessionStorage.setItem("accessJWT", payload);
      dispatch(fetchUserAction());
    }
  }
};
