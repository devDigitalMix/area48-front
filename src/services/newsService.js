import axios from "axios";

const baseURL = "http://localhost:3000";

export async function getNewsService(limit, offset) {
  const response = await axios.get(
    `${baseURL}/news/?limit=${limit}&offset=${offset}`
  );
  return response;
}

export async function getLatestNews() {
  const response = await axios.get(`${baseURL}/news/latest`);
  console.log(response);
  return response;
}

export async function getNewsByIdService(id) {
  const response = await axios.get(`${baseURL}/news/${id}`);
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
