import axios from "axios";

const BASE_URL = "https://shopwithvikbackend.onrender.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Njg3OTllNjdiM2NiOTJjODc0ZWY2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTM0NTgyMSwiZXhwIjoxNzAxNjkxNDIxfQ.t7uC8R7t_GVbTgZbHXI80vk_2wkSihKB_4iSn4E7qgI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
