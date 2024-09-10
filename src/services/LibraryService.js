import axios from 'axios'

const spotify_url = "http://localhost:8080/"

class LibraryService{
    addSong(title, username){
        const form = new FormData();
        form.append("title",title);
        form.append("username",username);
        return axios.post(spotify_url + "addSong", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    deleteSong(title,username){
        const form = new FormData();
        form.append("title",title);
        form.append("username",username)
        return axios.delete(spotify_url + "deleteSong", form, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
    getSongs(username){
        const form = new FormData();
        form.append('username',username)
        return axios.get(spotify_url + "info", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    clear(username){
        const form = new FormData();
        form.append('username',username)
        return axios.delete(spotify_url + "clear", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
}

export default new LibraryService();