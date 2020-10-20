import axios from "axios";
import { DOMAIN_API } from "lib/common";

export async function getMe() {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${DOMAIN_API}/me`, {
    headers: { "x-access-token": token },
  });
  console.log(res);
  return res.data;
}

export async function requestLogin(email, password) {
  const data = await axios.post(`${DOMAIN_API}/login`, {
    email,
    password,
  });
  console.log(data);

  // if (user) {
  //   localStorage.setItem("token", user.data.token);
  //   return user.data;
  // } else {
  //   return false;
  // }
}

export async function requestLogout() {
  await localStorage.setItem("token", "");
}

export async function requestRegister(email, password, username) {
  const res = await axios.post(
    `${DOMAIN_API}/register`,
    { email, password, username },
    { withCredentials: true }
  );
  if (res.data) {
    return true;
  } else {
    alert("회원 정보를 다시 입력해주세요");
    return false;
  }
}
