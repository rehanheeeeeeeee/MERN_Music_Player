import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Here we are creating an API Slice for our data layer and inside of
// here we will create query methods that all the components of my
// app will be able to access and make calls to certain routes using
// them.

export const api = createApi({
  // Stating the base url for our query methods
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  // The name for our Api slice.
  reducerPath: "appApi",
  // We can assign tags to our API query method to be able to identify
  // them
  tagTypes: [],
  // Given the base url we will be defining the query methods and each
  // query method will make a call to a different endpoints in our base
  // url.
  endpoints: (build) => ({
    //
  }),
});

// Exporting the query methods defined so they can be used within our
// components
export const { useGetVerificationQuery } = api;
