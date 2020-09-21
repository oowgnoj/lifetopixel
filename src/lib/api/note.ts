import axios from "axios";
import INote from "types/note";
const server = "http://localhost:4500";

export async function requestNote() {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${server}/note`, {
    headers: { "x-access-token": token },
  });
  return res.data;
}

export async function postNote(body: INote) {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${server}/note`, body, {
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
