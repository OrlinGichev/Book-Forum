import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import useLocalStorageState from "../hooks/useLocalStorageState";


const AuthContext = createContext();

export const AuthProvider = ({
    // eslint-disable-next-line react/prop-types
    children,
}) => {

    const navigate = useNavigate();
  const [auth, setAuth] = useLocalStorageState('auth',{})

  const loginSubmitHandler = async (values) => {
    try {
      
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');

    } catch (err) {

      throw new Error("Invalid email or password");
  }
}

  const registerSubmitHandler = async (values) => {
    try {
      const result = await authService.register(values.email,values.password);

      setAuth(result);
  
      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');

    }catch (err) {
      throw new Error("Registration failed", err);
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