import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: [],
  total: 0,
  price: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const findItem = state.allProduct.find(
        (product) => product.id === payload.id
      );

      console.log(findItem);

      if (findItem) {
        findItem.amount = payload.amount;
      } else {
        state.allProduct = [...state.allProduct, payload];
      }
    },

    // addToCard: (state, { payload }) => {
    //   const item = state.allProduct.find((prod) => prod.id == payload.id);
    //   if (item) {
    //     item.amout += 1;
    //   } else {
    //     state.allProduct = [...state.allProduct, payload];
    //   }
    //   productSlice.caseReducers.counterTotal(state);
    // },
    // counterTotal: (state) => {
    //   let allPrice = 0;
    //   let allSelectProd = 0;
    //   state.allProduct.forEach((prod) => {
    //     allPrice += prod.amout * prod.price;
    //     allSelectProd += prod.amout;
    //   });
    //   state.price = allPrice;
    //   state.total = allSelectProd;
    //   localStorage.getItem("product", JSON.stringify(state));
    // },
    // deleteItem: (state, { payload }) => {
    //   console.log(payload);
    //   const newItem = state.allProduct.filter((prod) => prod.id !== payload);
    //   state.total -= 1;
    //   state.allProduct = newItem;
    // },
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
