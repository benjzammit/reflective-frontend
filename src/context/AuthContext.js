import React, { createContext, useState } from 'react';
import { loginUser, registerUser } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await registerUser({ name, email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
