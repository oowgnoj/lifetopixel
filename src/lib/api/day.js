// api 모두 main 에서 관리
import axios from "axios";
import { DOMAIN_API } from "lib/common";
export async function requestDay() {
  const token = JSON.parse(localStorage.getItem("token"));
  return await axios.get(`${DOMAIN_API}/day`, {
    headers: { "x-access-token": token },
  });
}

export async function postDay(payload) {
  const token = JSON.parse(localStorage.getItem("token"));
  return await axios.post(`${DOMAIN_API}/day`, payload, {
    headers: { "x-access-token": token },
  });
}
