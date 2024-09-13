/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const spotify_url = "http://localhost:8000/"
const loginPayload = {
    username: "jesusman22",
    password: "jacksonlu"
}
class UserService{
    register(email1,fullName1,password1){
        return axios.post(spotify_url + "users/signup", {
            email: email1,
            password: password1,
            fullName: fullName1,
        },{headers: {
            'Content-Type': 'application/json',
            'Authorization': 'No Auth'
            },
        })
    }
    login(email1,password1){
        return axios.post(spotify_url + "users/login",{
            email: email1,
            password: password1
        },{headers: {
            'Content-Type': 'application/json',
            'Authorization': 'No Auth'
            
            },
        })
    }
    getUser(id){
        const form = new FormData();
        form.append('id',id);
        return axios.get(spotify_url + "users/getCurrentUser" ,form, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
    info(username){
            const form = new FormData();
            form.append('username',username)
            return axios.get(spotify_url + "info", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    update(username,password,role,email){
        const form = new FormData();
        form.append('username',username)
        form.append('password',password)
        form.append('role',role)
        form.append("email",email)
        return axios.put(spotify_url + "update", form, {headers: {'Content-Type': 'multipart/form-data'}}
        );
    }
    delete(username,user_id){
        const form = new FormData();
        form.append("username",username)
        return axios.delete(spotify_url + "deleteUser/" + user_id, form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    
}

export default new UserService()