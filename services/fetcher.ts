import axios from "axios";

async function fetcher(url: string, params: { [key: string]: string }) {
  const response = await axios.get(url, { params });
  return response.data;
}

export default fetcher;
