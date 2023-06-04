import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import { AppRoutes } from '../../routes';

interface LoginState {
  email: string;
  password: string;
  loading: boolean;
  error: string;
}

export const Login: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [state, setState] = useState<LoginState>({
    email: '',
    password: '',
    loading: false,
    error: '',
  });

  const isEmailValid = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isEmailValid(state.email)) {
      setState({ ...state, error: 'Please enter a valid email.' });
      return;
    }

    setState({ ...state, loading: true, error: '' });

    try {
      await signIn(state.email, state.password);
      navigate(AppRoutes.PROFILE);
    } catch (error) {
      setState({
        ...state,
        error: 'Failed to sign in. Please check your email and password.',
        loading: false,
      });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            required
          />
        </label>
        {state.error && <p>{state.error}</p>}
        <button type="submit" disabled={state.loading}>
          {state.loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
};
