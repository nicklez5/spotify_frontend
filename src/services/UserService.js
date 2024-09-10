import axios from 'axios'

const spotify_url = "http://localhost:8080/"

class UserService{
    register(username1,password1,email1,role1){
        axios.post(spotify_url + "register",{
            username: username1,
            password: password1,
            email: email1,
            role: role1
        }, )
    }
    login(username1,password1){
        return axios.post(spotify_url + "login",{
            username: username1,
            password: password1
        })
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

export default new UserService();