import { toast } from "react-toastify";
import { fetchAllBorrowApi } from "./borrowApi.js";
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
