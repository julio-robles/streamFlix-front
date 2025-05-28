import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import MoviesPage from './pages/movies';
import RegisterPage from './pages/RegisterPage';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Dynamic authentication state

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recover-password" element={<PasswordRecoveryPage />} />
        <Route
          path="/movies"
          element={isAuthenticated ? <MoviesPage /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
