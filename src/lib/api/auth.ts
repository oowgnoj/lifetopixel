import axios from "axios";
import IUser, { IUserResponse } from "types/user";
import { DOMAIN_API } from "lib/common";

export async function getMe() {
  const token = localStorage.getItem("token");
  const res = await axios.get<IUser>(`${DOMAIN_API}/user`, {
    headers: { "x-access-token": token },
  });
  return res.data;
}

export async function requestLogin(email: string, password: string) {
  const user = await axios.post<IUserResponse>(`${DOMAIN_API}/login`, {
    email,
    password,
  });
  if (user) {
    localStorage.setItem("token", user.data.token);
    return user.data;
  } else {
    return false;
  }
}

export async function requestLogout() {
  await localStorage.setItem("token", "");
}

export async function requestRegister(
  email: string,
  password: string,
  username: string
) {
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
