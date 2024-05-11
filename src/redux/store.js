import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dummyData";
// import cartSlice from "./service/cartSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath] : productsApi.reducer,
        // cart: cartSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);