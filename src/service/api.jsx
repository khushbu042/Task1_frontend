import axios from "axios";

const API_URL ="http://localhost:8085"

export const addUser = async(data) =>{
    try{
        return await axios.post(`${API_URL}/user`,data)
    }catch(error){
        console.log(error.message)
    }
}

export const getUsers = async() =>{
    try{
        return await axios.get(`${API_URL}/users`);
    }catch(error){
        console.log(error.message)
    }
} 

export const getUser = async(id) =>{
    try{
        return await axios.get(`${API_URL}/users/${id}`)
    }catch(error){
        console.log(error.message)
    }
}

export const editUser = async(data,id) =>{
    try{
        return await axios.put(`${API_URL}/user`,data);
    }catch(error){
        console.log(error.message)
    }
}
export const deleteUser = async(id) =>{
    try{
       return await axios.delete(`${API_URL}/user/${id}`);
    }catch(error){
        console.log(error.message)
    }
}