import axios from "axios";

const baseURL = "http://localhost:3000";

export async function getNewsService() {
  const response = await axios.get(`${baseURL}/news/`);
  return response;
}

export async function createNewsService(data) {
  const response = await axios.post(`${baseURL}/news/create`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
}

export async function updateNewsService(id, data) {
  const response = await axios.patch(`${baseURL}/news/update/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
}

export async function deleteNewsService(id) {
  const response = await axios.delete(`${baseURL}/news/delete/${id}`);
  console.log(response);
}
