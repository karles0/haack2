import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Card } from '../components/common/Card';
import { RegisterForm } from '../components/auth/RegisterForm';
import { ROUTES } from '../utils/constants';

export const Register = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
        padding: '1rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '0.5rem',
            }}
          >
            Create Account
          </h1>
          <p style={{ color: '#6b7280' }}>Join us today</p>
        </div>

        <Card>
          <RegisterForm />
        </Card>
      </div>
    </div>
  );
};
