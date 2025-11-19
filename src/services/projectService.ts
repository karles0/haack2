import { api } from './api';
import { API_ENDPOINTS } from '../utils/constants';
import type {
  Project,
  CreateProjectRequest,
  UpdateProjectRequest,
  ProjectsListResponse,
} from '../types';

export const projectService = {
  // ======================================
  // LIST PROJECTS
  // GET /v1/projects
  // Lista todos los proyectos con paginación y búsqueda
  // ======================================
  async listProjects(
    page: number = 1,
    limit: number = 10,
    search?: string
  ): Promise<ProjectsListResponse> {
    const params: Record<string, any> = { page, limit };
    if (search) {
      params.search = search;
    }

    const response = await api.get<ProjectsListResponse>(
      API_ENDPOINTS.PROJECTS.BASE,
      { params }
    );
    return response.data;
  },

  // ======================================
  // CREATE PROJECT
  // POST /v1/projects
  // Crea un nuevo proyecto
  // ======================================
  async createProject(data: CreateProjectRequest): Promise<Project> {
    const response = await api.post<Project>(
      API_ENDPOINTS.PROJECTS.BASE,
      data
    );
    return response.data;
  },

  // ======================================
  // GET PROJECT
  // GET /v1/projects/{id}
  // Obtiene detalles de un proyecto con sus tareas
  // ======================================
  async getProject(projectId: number): Promise<Project> {
    const response = await api.get<Project>(
      `${API_ENDPOINTS.PROJECTS.BASE}/${projectId}`
    );
    return response.data;
  },

  // ======================================
  // UPDATE PROJECT
  // PUT /v1/projects/{id}
  // Actualiza información del proyecto
  // ======================================
  async updateProject(
    projectId: number,
    data: UpdateProjectRequest
  ): Promise<Project> {
    const response = await api.put<Project>(
      `${API_ENDPOINTS.PROJECTS.BASE}/${projectId}`,
      data
    );
    return response.data;
  },

  // ======================================
  // DELETE PROJECT
  // DELETE /v1/projects/{id}
  // Elimina un proyecto
  // ======================================
  async deleteProject(projectId: number): Promise<void> {
    await api.delete(`${API_ENDPOINTS.PROJECTS.BASE}/${projectId}`);
  },
};
