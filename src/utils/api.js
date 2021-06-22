import axios from "axios";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PROXY = process.env.REACT_APP_PROXY;

export default axios.create({
  baseURL: `${PROXY}/api`,
});

export const baseUrl = `${PROXY}/api`;
export const baseQuery = fetchBaseQuery({ baseUrl });
export const baseQueryV1 = fetchBaseQuery({ baseUrl: `${baseUrl}/v1` });
