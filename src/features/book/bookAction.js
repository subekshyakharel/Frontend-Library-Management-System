import {
  adminFetchAllBookApi,
  fetchAllPublicBookApi,
  fetchSinglePublicBookApi,
  postNewBookApi,
} from "./bookApi";
import { setbook, setPublicbook, setSelectedbook } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookApi();
  status === "success" && dispatch(setbook(payload));
};

export const fetchAllPublicBookAction = () => async (dispatch) => {
  const { status, payload } = await fetchAllPublicBookApi();
  status === "success" && dispatch(setPublicbook(payload));
};
export const fetchSinglePublicBookAction = (slug) => async (dispatch) => {
  const { status, payload } = await fetchSinglePublicBookApi(slug);
  status === "success" && dispatch(setSelectedbook(payload));
};
