import { toast } from "react-toastify";
import {
  fetchAllReviewsApi,
  postNewReviewApi,
  updateReviewStatusApi,
} from "./reviewApi.js";
import { setmodalShow } from "../system/systemSlice.js";
import { getAllBorrowAction } from "../borrow/borrowAction.js";
import { setAllReview } from "./reviewSlice.js";

export const postNewReviewAction = (payload) => async (dispatch) => {
  const pending = postNewReviewApi(payload);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);
  ///todo
  if (status === "success") {
    dispatch(setmodalShow(false));
    dispatch(getAllBorrowAction());
  }
};

export const getAllReviewsAction = (isAdmin) => async (dispatch) => {
  const pending = fetchAllReviewsApi(isAdmin);
  const { status, payload, message } = await pending;

  if (status === "success") {
    dispatch(setAllReview(payload));
  } else {
    console.error("Failed to fetch reviews:", message);
  }
};

export const updateReviewStatusAction =
  (isAdmin, payload) => async (dispatch) => {
    if (!isAdmin) {
      return;
    }
    const pending = updateReviewStatusApi(payload);
    toast.promise(pending, {
      pending: "Please wait...",
    });
    const { status, message } = await pending;
    toast[status](message);
    ///todo
    if (status === "success") {
      dispatch(getAllReviewsAction(isAdmin));
    }
  };
