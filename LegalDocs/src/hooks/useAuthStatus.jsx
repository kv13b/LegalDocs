import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function useAuthStatus(redirectTo = "/") {
  const { isAuthenticated, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. If context already says we're authenticated, nothing to do
    if (isAuthenticated) return;

    // 2. Stub: check for a token in localStorage
    const tokenKey = import.meta.env.VITE_AUTH_TOKEN_KEY || "authToken";
    const token = localStorage.getItem(tokenKey);

    if (token) {
      // TODO: You’d verify the token with an API call here,
      // then fetch user data. For now, we’ll stub it:
      setUser({
        isAuthenticated: true,
        userData: { name: "Stub User", email: "stub@example.com" },
      });
      return;
    }

    // 3. No valid auth—redirect away
    navigate(redirectTo, { replace: true });
  }, [isAuthenticated, navigate, redirectTo, setUser]);

  return isAuthenticated;
}
