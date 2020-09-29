import React, { useState, useEffect, createContext, useContext } from "react";
import { getMe } from "lib/api/auth";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    handleGetMe();
  }, []);

  const handleGetMe = async () => {
    const { email, username } = await getMe();
    setUserInfo({ email, username });
  };
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
