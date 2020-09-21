import axios from "axios";
import IDay from "types/day";
const server = "http://localhost:4500";

export async function requestDay() {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${server}/day`, {
    headers: { "x-access-token": token },
  });
  return res.data;
}

export async function postDay(body: IDay) {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${server}/day`, body, {
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
