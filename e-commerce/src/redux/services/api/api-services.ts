import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiServices = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
});
