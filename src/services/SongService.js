import axios from 'axios'

const spotify_url = "http://localhost:8000/song"

class SongService{
    info(id, email){
        const form = new FormData();
        form.append('email',email)
        return axios.get(spotify_url  + "/info/" + id , form, {headers : {'Content-Type' : 'multipart/form-data'}
        }) 
    }
    upload(email,title,artist, file){
        const form = new FormData();
        form.append('email',email)
        form.append('title',title)
        form.append('artist',artist)
        form.append('file',file)
        return axios.post(spotify_url + "/upload", form, {headers: {'Content-Type' : 'multipart/form-data'}
        })
    }
    edit(song_id, title, artist, file, email){
        const form = new FormData();
        form.append('title',title)
        form.append('artist',artist)
        form.append('file',file)
        form.append('email',email)
        return axios.put(spotify_url + "/editSong/" + song_id, form, {headers: {'Content-Type': 'multipart/form-data'}
        })
    }
    delete(song_id, email){
        const form = new FormData();
        form.append('email',email)
        return axios.delete(spotify_url + "/deleteSong/" + song_id, form, {headers: {'Content-Type' : 'multipart/form-data'}
        })
    }
    allSongs(){
        return axios.get(spotify_url + "/all", {headers : {'Content-Type' : 'multipart/form-data'}
        })
    }
    download(filename){
        const form = new FormData()
        form.append('filename',filename)
        return axios.get(spotify_url + "/downloadFile", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    
}
export default new SongService();