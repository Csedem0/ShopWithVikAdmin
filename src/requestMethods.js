import axios from "axios";

const BASE_URL = "https://shopwithvikbackend.onrender.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmRiMDY3YWYyNTYzMTdkYzc4ZmRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjg4NTA4MSwiZXhwIjoxNzAzMjMwNjgxfQ.jo0nroR0PtBaPH87kT_RsbxkOMLqJf2fJTkWxgodD1A";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
