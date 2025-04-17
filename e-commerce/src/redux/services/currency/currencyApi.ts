// api/currencyApiServices.ts

import { apiServices } from "../api/api-services";

export const productApiServices = apiServices.injectEndpoints({
  endpoints: (builder) => ({
    fetchProductServices: builder.query<any, { offset: number; limit: number }>(
      {
        async queryFn({ offset, limit }) {
          try {
            const response = await fetch(
              `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
            );

            if (!response.ok) {
              throw new Error("فشل في جلب البيانات");
            }

            const data = await response.json();
            return { data };
          } catch (error: any) {
            return { error: error.message };
          }
        },
        keepUnusedDataFor: 3 * 60 * 60,
      }
    ),
  }),
});

export const { useFetchProductServicesQuery } = productApiServices;
