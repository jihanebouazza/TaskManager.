import { useContext, useReducer } from "react";
import { createContext } from "react";

const FAKE_USER = {
  firstname: "John",
  lastname: "Doe",
  email: "johndoe@gmail.com",
  password: "qwerty",
  avatar:
    "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "logout":
      return initialState;
    default:
      throw new Error("Unknown");
  }
}

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [{ isAuthenticated, user }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of the auth provider");
  return context;
}

export { AuthProvider, useAuth };
