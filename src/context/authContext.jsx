import React, { useState, useEffect, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getMe } from "lib/api/auth";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const history = useHistory();
  useEffect(() => {
    async function requestMe() {
      const { email, username } = await getMe();
      setUserInfo({ email, username });
    }
    try {
      requestMe();
    } catch {
      history.push("/login");
    }
  }, []);

  const changeUserInfo = (values) => {
    setUserInfo(values);
  };

  return (
    <UserContext.Provider
      value={{ userInfo: userInfo, setUserInfo: changeUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserInfo() {
  return useContext(UserContext);
}
