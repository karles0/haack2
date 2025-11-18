import { apiService } from './api';
import { API_ENDPOINTS, STORAGE_KEYS } from '../utils/constants';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  User,
} from '../types';

class AuthService {
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    const response = await apiService.post<RegisterResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    );
    return response;
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await apiService.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );

    // Store token and user data
    if (response.token) {
      this.setAuthData(response.token, response.user);
    }

    return response;
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
  }

  getToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
  }

  getUser(): User | null {
    const userData = localStorage.getItem(STORAGE_KEYS.USER);
    if (!userData) return null;

    try {
      return JSON.parse(userData);
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private setAuthData(token: string, user: User): void {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }
}

export const authService = new AuthService();
