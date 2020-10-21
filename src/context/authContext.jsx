import React, { useState, useEffect, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getMe } from "lib/api/auth";

export const AuthContext = createContext({});
export const useAuth = () => {
  return useContext(AuthContext);
};
