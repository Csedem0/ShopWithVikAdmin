import axios from "axios";

const BASE_URL = "https://shopwithvikbackend.onrender.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmRiMDY3YWYyNTYzMTdkYzc4ZmRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDE0MTA5NCwiZXhwIjoxNzA0NDg2Njk0fQ.O1XvFSfGDhtHVSraoqQFvFOUN-3H5exJ3K9v1X0B5kM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
