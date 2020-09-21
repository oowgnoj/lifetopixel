import axios from "axios";
const server = "http://localhost:4500";

export async function requestLogin(email: string, password: string) {
  const user = await axios.post(
    `${server}/login`,
    { email, password },
    { withCredentials: true }
  );
  if (user) {
    localStorage.setItem("token", user.data.token);
    return user;
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
    `${server}/register`,
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
