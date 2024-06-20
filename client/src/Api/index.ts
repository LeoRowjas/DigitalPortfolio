import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
   baseURL: BASE_URL,
   headers: {
      "Content-Type": "application/json",
   },
});

export default api;

// Project API
// export const getUserProjects = (userId: string) =>
//    api.get(`/api/Project/userall/${userId}`);
// export const getAllProjects = () => api.get("/api/Project/all");
// export const getProjectById = (id: string) => api.get(`/api/Project/${id}`);
// export const addUserToProject = (userId: string, projectId: string) =>
//    api.post(`/api/Project/add/user=${userId}&project=${projectId}`);
// export const editProject = (id: string, data: any) =>
//    api.put(`/api/Project/edit/${id}`, data);
// export const patchProject = (id: string, data: any) =>
//    api.patch(`/api/Project/edit/${id}`, data);
// export const deleteProject = (projectId: string) =>
//    api.delete(`/api/Project/delete/${projectId}`);
// export const likeProject = (projectId: string) =>
//    api.post(`/api/Project/${projectId}/like`);
// export const unlikeProject = (projectId: string) =>
//    api.delete(`/api/Project/${projectId}/unlike`);

// // User API
// export const getAllUsers = () => api.get("/api/User/all");
// export const getUserById = (id: string) => api.get(`/api/User/${id}`);
// export const addUser = (data: any) => api.post("/api/User/add", data);
// export const editUser = (id: string, data: any) =>
//    api.put(`/api/User/edit/${id}`, data);
// export const patchUser = (id: string, data: any) =>
//    api.patch(`/api/User/edit/${id}`, data);
// export const deleteUser = (id: string) => api.delete(`/api/User/delete/${id}`);

// Project API
export const getUserProjects = (username: string) =>
   api.get(`/api/Project/userall/${username}`);
export const getAllProjects = () => api.get("/api/Project/all");
export const getProjectById = (id: string) => api.get(`/api/Project/${id}`);
export const addProject = (data: any) => api.post("/api/Project/add", data);
export const editProject = (id: string, data: any) =>
   api.put(`/api/Project/edit/${id}`, data);
export const deleteProject = (projectId: string) =>
   api.delete(`/api/Project/delete/${projectId}`);
export const likeProject = (projectId: string) =>
   api.post(`/api/Project/${projectId}/like`);
export const unlikeProject = (projectId: string) =>
   api.delete(`/api/Project/${projectId}/unlike`);

// User API
export const getAllUsers = () => api.get("/api/User/all");
export const getUserByUsername = (username: string) =>
   api.get(`/api/User/${username}`);
export const loginUser = (data: any) => api.post("/api/User/login", data);
export const registerUser = (data: any) => api.post("/api/User/register", data);
export const editUser = (username: string, data: any) =>
   api.put(`/api/User/edit/${username}`, data);
export const deleteUser = (username: string) =>
   api.delete(`/api/User/delete/${username}`);
