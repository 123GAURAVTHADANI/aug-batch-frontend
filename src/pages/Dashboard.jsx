import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";
import { AuthContext } from "../components/AuthProvider";

function Dashboard() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleAuthentication = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login();
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{isAuthenticated ? "Welcome Back!" : "Please Log In"}</h1>
      <button onClick={handleTheme}>Toggle</button>
      <button onClick={handleAuthentication}>Login/Logout</button>
    </div>
  );
}
export default Dashboard;
