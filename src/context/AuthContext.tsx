import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  login: (id: string, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const id = localStorage.getItem("scores_id");
    const token = localStorage.getItem("scores_token");
    setIsLoggedIn(!!id && !!token);
  }, []);

  const login = (id: string, token: string) => {
    localStorage.setItem("scores_id", id);
    localStorage.setItem("scores_token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("scores_id");
    localStorage.removeItem("scores_token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
