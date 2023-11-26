import axios from "axios";

const BASE_URL = "https://shopwithvikbackend.onrender.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjJmZTE3ZGE5OTRiMTNiOGQ4ZDkyZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDk5MzE2MywiZXhwIjoxNzAxMzM4NzYzfQ.Ne9VC1_nMnMKa5UlNQZkjQHqUtkyLyPjG_D4WY-SBuM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
