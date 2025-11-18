// User types
export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
}

// Auth request types
export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// Auth response types
export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterResponse {
  [key: string]: any;
}

// API Error type
export interface ApiError {
  detail?: Array<{
    loc: (string | number)[];
    msg: string;
    type: string;
  }>;
  message?: string;
}

// Project types (for future implementation)
export interface Project {
  id: number;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

// Task types (for future implementation)
export interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed';
  project_id: number;
  created_at: string;
  updated_at: string;
}
