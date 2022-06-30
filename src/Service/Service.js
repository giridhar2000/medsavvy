import axios from "axios"

const USERS_REST_API_URL = "http://localhost:8080/api/users"

export default class Service {
    getUsers(){
        axios.get(USERS_REST_API_URL)
    }
}
