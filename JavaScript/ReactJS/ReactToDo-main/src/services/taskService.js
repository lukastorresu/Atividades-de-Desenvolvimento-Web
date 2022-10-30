import axios from "axios"

const baseUrl = "http://localhost:9000/"
class TaskService {
    async create(data){
        return axios({
            url: baseUrl + "add",
            method: "HOST",
            timeout: 1000,
            data: data,
            headers:{
                'Content-Type': 'aplication/json',
                'Accept':'/'
            }
        }).then((res) =>{
                return Promise.resolve(res)
        }).catch((err) => {
            return Promise.reject(err)
        })
        
    }
    async getAll (){
        return axios({
            url: baseUrl + "getAll",
            method: "GET",
            timeout: 1000,
            headers:{
                'Content-Type': 'aplication/json',
                'Accept':'/'
            }
        }).then((res) =>{
                return Promise.resolve(res)
        }).catch((err) => {
            return Promise.reject(err)
        })
        
    }
    async getPerType (type){
        return axios({
            url: baseUrl + "get/" + type,
            method: "GET",
            timeout: 1000,
            headers:{
                'Content-Type': 'aplication/json',
                'Accept':'/'
            }
        }).then((res) =>{
                return Promise.resolve(res)
        }).catch((err) => {
            return Promise.reject(err)
        })
        
    }
    async getOne (data){
        return axios({
            url: baseUrl + "getOne/" + data,
            method: "GET",
            timeout: 1000,
            headers:{
                'Content-Type': 'aplication/json',
                'Accept':'/'
            }
        }).then((res) =>{
                return Promise.resolve(res)
        }).catch((err) => {
            return Promise.reject(err)
        })
        
    }
    async update (data){
        return axios({
            url: baseUrl + "update",
            method: "PUT",
            timeout: 1000,
            data: data,
            headers:{
                'Content-Type': 'aplication/json',
                'Accept':'/'
            }
        }).then((res) =>{
                return Promise.resolve(res)
        }).catch((err) => {
            return Promise.reject(err)
        })
        
    }
    async delete (data){
        return axios({
            url: baseUrl + "delete/" + data,
            method: "DELETE",
            timeout: 1000,
            headers:{
                'Content-Type': 'aplication/json',
                'Accept':'/'
            }
        }).then((res) =>{
                return Promise.resolve(res)
        }).catch((err) => {
            return Promise.reject(err)
        })
        
    }
}


const taskService = new TaskService()
export default taskService