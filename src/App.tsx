import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { ROUTES } from './utils/constants';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PROJECTS}
            element={
              <ProtectedRoute>
                <div style={{ padding: '2rem' }}>
                  <h1>Projects - Coming Soon</h1>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.TASKS}
            element={
              <ProtectedRoute>
                <div style={{ padding: '2rem' }}>
                  <h1>Tasks - Coming Soon</h1>
                </div>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
