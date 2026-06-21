import { useState, createContext, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";
import { ThemeContext } from "./components/ThemeProvider";
import { AuthContext } from "./components/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import MainPage from "./pages/MainPage";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardAdminSettings from "./pages/DashboardAdminSettings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/home" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/dashboard" element={<Dashboard />}>
            // outlet components
            <Route index element={<h2>Welcome to Dashboard</h2>} />
            <Route path="settings" element={<DashboardSettings />} />
            <Route path="adminSettings" element={<DashboardAdminSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// NewFolder/test.js

export default App;

// localhostL:5001/dashboard/settings
// A (App) -> B - > C

// localhost:5123/dashboard
// localhost:5123/dashboard/settings
// localhost:5123/dashboard/adminSettings

// ProtectedRoutes, useRef , useMemo , custom Hook (useFetch())
// useCallback , Higher Order Components , use , useFormActions .
