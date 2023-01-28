// We have to configure our data layer which is going to store the data
// within our slices and our api methods.
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducers from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducers,
    // So basically we are setting the name of the api slice which
    // is inside of the reducerPath property to the query methods
    // defined. This adds our api slice to the data along with the
    // query methods defined.
    [api.reducerPath]: api.reducer,
  },
  // Adding middleware to use our Query methods
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

// Setting up event listner to listen for api calls through our query
// methods
setupListeners(store.dispatch);
