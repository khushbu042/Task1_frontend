import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8085",
    headers: {
        "Content-Type": "application/json",
    },
});

export const addUser = async (data) => {
    try {
        const response = await api.post("/user", data);
        return response.data;
    } catch (error) {
        console.error("Error adding user:", error.message);
    }
};

export const getUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error.message);
    }
};

export const getUser = async (id) => {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error.message);
    }
};

export const editUser = async (data, id) => {
    try {
        const response = await api.put(`/user/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error editing user with ID ${id}:`, error.message);
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/user/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error.message);
    }
};