import axios from "axios";
import { DOMAIN_API } from "lib/common";

export async function requestTag() {
  const token = JSON.parse(localStorage.getItem("token"));
  return await axios.get(`${DOMAIN_API}/tag`, {
    headers: { "x-access-token": token },
  });
}

export async function postTag(body) {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.post(`${DOMAIN_API}/tag`, body, {
      headers: { "x-access-token": token },
    });
    if (res.data && res.data.hasError) {
      return { hasError: true, error: res.data.message };
    }
    return res.data;
  } catch (error) {
    return { hasError: true, data: error };
  }
}
