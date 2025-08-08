import axios from "axios";

const baseURL = "http://localhost:3000";

export async function createBannerService(data) {
  const response = axios.post(`${baseURL}/banner/create`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
}

export async function getBannerService() {
  const response = axios.get(`${baseURL}/banner/`);
  return response;
}
