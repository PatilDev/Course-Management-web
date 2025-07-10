import axios from "axios";
import baseUrl from "./SpringBootApi";


        /* CRUD OPration */
//Get data from spring boot 
export const getAllUserFromServer =()=>{return axios.get(`${baseUrl}/user/list`);}
export const getUserByID=(id)=>{return axios.get(`${baseUrl}/user/byid/${id}`);}

//post data to spring boot
export const createNewUSerAccount=(userData)=>{return axios.post(`${baseUrl}/user/newuser`,userData);}

//Update data put
export const updateUserDetails=(id,updtedDetais)=>{return axios.put(`${baseUrl}/user/update/${id}`,updtedDetais);}

//delate user account
export const deleteAccount=(id)=>{return axios.delete(`${baseUrl}/user/delete/${id}`);}