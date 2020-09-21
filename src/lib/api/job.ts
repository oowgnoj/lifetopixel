import axios from "axios";
import IJob from "types/job";
const server = "http://localhost:4500";

export async function requestJob() {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${server}/job`, {
    headers: { "x-access-token": token },
  });
  return res.data;
}

export async function postJob(body: IJob) {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${server}/job`, body, {
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
