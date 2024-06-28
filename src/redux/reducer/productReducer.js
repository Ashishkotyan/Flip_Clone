import * as actionType from "../constants/productConstant";

import { products, Top_Selection } from "../../constant/data";

let data = {
    products: products,
  Top_Selection: Top_Selection,
};
let productAll = products;
export const getProductsReducer = (state = data, action) => {
  // console.log(state,"getAll");
  switch (action.type) {
    case "Productall":
      return state;

    case "Top_Selection":
      return state.Top_Selection;
    default:
      return state;
  }
};
