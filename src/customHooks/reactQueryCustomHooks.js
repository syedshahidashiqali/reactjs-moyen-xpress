import axios from "axios";
import { useMutation } from "react-query";
import { CARTDELETE } from "../apiRoutes";

const deleteCartProduct = (data) => {
  axios.get(`${CARTDELETE}/${data.cartId}/${data.userId}`);
};

export const useDeleteCartProduct = () => {
  return useMutation(deleteCartProduct);
};
