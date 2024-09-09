import axios from 'axios'

const spotify_url = "http://localhost:8080/"

class APIService{
    register(){
        return axios.post(spotify_url + "register")
    }
    login(){
        return axios.post(spotify_url + "login")
    }
    info(){
        axios.get(spotify_url + "info")
    }
    playlist_info(playlist_id){
        axios.get(spotify_url + "getPlaylist/" + playlist_id)
    }
    create_playlist(){
        return axios.post(spotify_url + "createPlaylist")
    }
    get_song_info(song_id){
        axios.get(spotify_url + song_id + "/info")
    }
    upload_song(username,title,artist,file){
        return axios.post(spotify_url + "upload")
    }
}