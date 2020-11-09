import axios from "axios";
import { DOMAIN_API } from "lib/common";

export async function requestField() {
  const token = JSON.parse(localStorage.getItem("token"));
  return await axios.get(`${DOMAIN_API}/field`, {
    headers: { "x-access-token": token },
  });
}

export async function postField(body) {
  const token = JSON.parse(localStorage.getItem("token"));
  return await axios.post(`${DOMAIN_API}/field`, body, {
    headers: { "x-access-token": token },
  });
}
