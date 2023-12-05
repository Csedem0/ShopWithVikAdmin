import axios from "axios";

const BASE_URL = "https://shopwithvikbackend.onrender.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmRiMDY3YWYyNTYzMTdkYzc4ZmRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTc1NDA1NSwiZXhwIjoxNzAyMDk5NjU1fQ.xx03nOhNeYebTaB7SgDB7DXLYlcFlCsCAswUAYrkpgw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
