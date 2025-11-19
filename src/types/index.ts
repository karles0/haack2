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

// Project types
export type ProjectStatus = 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';

export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  owner_id: number;
  created_at: string;
  updated_at: string;
  tasks?: Task[];
}

export interface CreateProjectRequest {
  name: string;
  description: string;
  status: ProjectStatus;
}

export interface UpdateProjectRequest {
  name?: string;
  description?: string;
  status?: ProjectStatus;
}

export interface ProjectsListResponse {
  projects: Project[];
  total_pages: number;
  current_page: number;
}

// Task types
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  project_id: number;
  created_at: string;
  updated_at: string;
}
