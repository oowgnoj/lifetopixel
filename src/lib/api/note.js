import axios from "axios";
import { DOMAIN_API } from "lib/common";

export async function requestNote() {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${DOMAIN_API}/note`, {
    headers: { "x-access-token": token },
  });
  return res.data;
}

export async function postNote(body) {
  const token = JSON.parse(localStorage.getItem("token"));
  return await axios.post(`${DOMAIN_API}/note`, body, {
    headers: { "x-access-token": token },
  });
}
