import { toast } from "react-toastify";
import { fetchAllBorrowApi, patchReturnBorrowApi } from "./borrowApi.js";
import { setAllBorrows, setMyBorrows } from "./borrowSlice.js";

export const getAllBorrowAction = (isAdmin) => async (dispatch) => {
  const pending = fetchAllBorrowApi({ isAdmin });
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { payload } = await pending;
  console.log(payload);
  isAdmin ? dispatch(setAllBorrows(payload)) : dispatch(setMyBorrows(payload));
};
export const returnBorrowAction = (payload) => async (dispatch) => {
  const pending = patchReturnBorrowApi(payload);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);
  status === "success" && dispatch(getAllBorrowAction());
};
