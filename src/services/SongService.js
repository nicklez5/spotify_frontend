import axios from 'axios'

const spotify_url = "http://localhost:8080/"

class SongService{
    info(id, username){
        const form = new FormData();
        form.append('username',username)
        return axios.get(spotify_url + id + "/info", form, {headers : {'Content-Type' : 'multipart/form-data'}
        }) 
    }
    upload(username,title,artist, file){
        const form = new FormData();
        form.append('username',username)
        form.append('title',title)
        form.append('artist',artist)
        form.append('file',file)
        return axios.post(spotify_url + "upload", form, {headers: {'Content-Type' : 'multipart/form-data'}
        })
    }
    edit(song_id, title, artist, file, username){
        const form = new FormData();
        form.append('title',title)
        form.append('artist',artist)
        form.append('file',file)
        form.append('username',username)
        return axios.put(spotify_url + "editSong/" + song_id, form, {headers: {'Content-Type': 'multipart/form-data'}
        })
    }
    delete(song_id, username){
        const form = new FormData();
        form.append('username',username)
        return axios.delete(spotify_url + "deleteSong/" + song_id, form, {headers: {'Content-Type' : 'multipart/form-data'}
        })
    }
    allSongs(username){
        const form = new FormData()
        form.append('username',username)
        return axios.get(spotify_url + "all",form, {headers : {'Content-Type' : 'multipart/form-data'}
        })
    }
    
}
export default new SongService();