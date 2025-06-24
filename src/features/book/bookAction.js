import { postNewBookApi } from "./bookApi";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
