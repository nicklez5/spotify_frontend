/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const spotify_url = "http://localhost:8080/"

class PlaylistService{
    addSongToPlaylist(id,title,artist,fileDownloadUri,filename,username){
        return axios.post(spotify_url + "addSongToPlaylist/" + username,{
            id: id,
            title: title,
            artist: artist,
            fileDownloadUri: fileDownloadUri,
            filename: filename
        })
    }
    removeSongToPlaylist(id,title,artist,fileDownloadUri,filename,username){
        return axios.delete(spotify_url + "removeSongFromPlaylist/" + username, {
            id: id,
            title: title,
            artist: artist,
            fileDownloadUri: fileDownloadUri,
            filename: filename
        })
    }
    getSongs(username){
        const form = new FormData();
        form.append('username',username);
        return axios.get(spotify_url + "getSongs", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    deletePlaylist(username){
        const form = new FormData();
        form.append('username',username)
        return axios.delete(spotify_url + "deletePlaylist", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    createPlaylist(username){
        const form = new FormData();
        form.append('username',username)
        return axios.get(spotify_url + "createPlaylist", form, {headers: {'Content-Type': 'multipart/form-data'}})

    }
    readPlaylist(username){
        const form = new FormData();
        form.append('username',username)
        return axios.get(spotify_url + "readPlaylist", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    renamePlaylist(username, playlist_name){
        const form = new FormData();
        form.append('username',username)
        form.append('playlist_name',playlist_name)
        return axios.put(spotify_url + "renamePlaylist", form, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
    clearPlaylist(username){
        const form = new FormData();
        form.append('username', username)
        return axios.delete(spotify_url + "clearPlaylist", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    getPlaylist(username){
        const form = new FormData();
        form.append('username',username)
        return axios.get(spotify_url + "getPlaylist", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
}
export default new PlaylistService()