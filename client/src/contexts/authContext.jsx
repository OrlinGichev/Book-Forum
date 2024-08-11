import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";


const AuthContext = createContext();

export const AuthProvider = ({
    // eslint-disable-next-line react/prop-types
    children,
}) => {

    const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');
  };

  const registerSubmitHandler = async (values) => {
    try {
      const result = await authService.register(values.email,values.password);

      setAuth(result);
  
      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');

    }catch (err) {
      console.error("Registration failed", err);
    }
  };

  const logoutHandler = () => {

    setAuth({});

    localStorage.removeItem('accessToken');

    navigate('/');
  };

  const dataContext = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken
  }
    return (
        <AuthContext.Provider value={dataContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;