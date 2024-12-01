import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../config'

const baseUrl = `${process.env.REACT_APP_API_URL}/api`

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', process.env.REACT_APP_API_KEY as string)
      return headers
    },
    timeout: config.apiTimeout,
  }),
  endpoints: (builder) => ({
    getStoreList: builder.query<StoreResponse, void>({
      query: () => '/store',
    }),
  }),
})

export const { useGetStoreListQuery } = storeApi

export const useGetStoreListQuerySubscription = storeApi.endpoints.getStoreList.useQuerySubscription

export const useGetStoreListQueryStateResult = storeApi.endpoints.getStoreList.useQueryState
