import axios from "axios";
import { DOMAIN_API } from "lib/common";
export async function requestDay() {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${DOMAIN_API}/day`, {
    headers: { "x-access-token": token },
  });
  return res.data;
}

export async function postDay(body) {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${DOMAIN_API}/day`, body, {
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
