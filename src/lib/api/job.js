import axios from "axios";
import { DOMAIN_API } from "lib/common";

export async function requestJob() {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${DOMAIN_API}/job`, {
    headers: { "x-access-token": token },
  });
  return res.data;
}

export async function postJob(body) {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${DOMAIN_API}/job`, body, {
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
