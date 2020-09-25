import React, { useState, useEffect, createContext, useContext } from "react";
import { getMe } from "lib/api/auth";
import IUser from "types/user";

type userInfo = {
  username: string;
  email: string;
};
export const UserContext = createContext({});
export const UserProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState<userInfo | null>(null);
  useEffect(() => {
    handleGetMe();
  }, []);

  const handleGetMe = async () => {
    const { email, username } = await getMe();
    setUserInfo({ email, username });
  };
  const changeUserInfo = (values: IUser) => {
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

export function useUserInfo<IUser>() {
  return useContext(UserContext);
}
