import axios from "axios"
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "./../css/dashboard.css"
import SongService from "../services/SongService";
import UserService from "../services/UserService";
import { jwtDecode} from 'jwt-decode'
export default function Dashboard(){

    const [songs,setSongs] = useState([])
    const [email,setEmail] = useState('')
    
    
    useEffect(() => {
        try{
            const token = localStorage.getItem('token');
            const user = jwtDecode(token)
            setEmail(user.sub);
    
            console.log("EMAIL:" + email)
            SongService.allSongs().then((res) => {
                setSongs(res.data);
            })
        }catch(error){
            console.log(error)
        }
    })

    const logout = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }
    return (
        <div className="outside">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">Library</a></li>
                <li><a href="#contact">Playlists</a></li>
                <li><a href="#about">Settings</a></li>
            </ul>
            <div>
                <header className="centered-header">
                    Welcome to Spotify
                </header>
            </div>
            <h2 className="text-center">Song Details</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>artist</th>
                        <th>fileDownloadUri</th>
                        <th>filename</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(({id,title,artist,fileDownloadUri,filename}, index) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>       
                                <td>{title}</td>
                                <td>{artist}</td>
                                <td><a href={fileDownloadUri}>{fileDownloadUri}</a></td>
                                <td>{filename}</td> 
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className="logout1" onClickCapture={logout}>Logout</button>
            </div>
    )
}

