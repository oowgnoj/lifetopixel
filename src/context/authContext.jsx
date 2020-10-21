import React, { useState, useEffect, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getMe } from "lib/api/auth";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const history = useHistory();
  console.log('auth context')
  useEffect(() => {
    console.log('auth context !!')
    async function requestMe() {
      const { email, username } = await getMe();
      setUserInfo(prev => prev && prev.email !== email && { email, username });
    }
    requestMe();

  }, [userInfo]);

  const changeUserInfo = (values) => {
    setUserInfo(values);
  };

  return (
    <UserContext.Provider
      value={{ userInfo: userInfo, setUserInfo: changeUserInfo }}
    >
      {console.log('in authcontext', userInfo)}
      {children}
    </UserContext.Provider>
  );
};

export function useUserInfo() {
  return useContext(UserContext);
}
