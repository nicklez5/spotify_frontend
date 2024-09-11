import React, {useState} from 'react'
import "./../css/signup.css"
import { Link , redirect} from 'react-router-dom'
import UserService from "../services/UserService";
import { useForm } from "react-hook-form";

export default function Signup(){
    const [status,setStatus] = useState('');
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
        UserService.register(data.username,data.password,data.email,data.role)
        .then(
            response => {
                console.log(response)
                setStatus({type: 'success'});
            })   
        .catch((error) => {
            setStatus({ type: 'error', error})
        })
    };
    
    return (
        
                <div className="outside">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">Library</a></li>
                        <li><a href="#contact">Playlists</a></li>
                        <li style={{marginRight: 10}}><a href="#about">Settings</a></li>
                    </ul>
                    <div>
                        <header className="centered-header">
                            Welcome to Spotify
                        </header>
                    </div>
                    <div className="addUser">
                    
                        <form className="addUserForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputGroup">
                                <label htmlFor="email">Email:</label>
                                    <input type="text" id="email" {...register("email", {required: true})} placeholder="Enter your email"/>
                                    {errors.email && <span>*Email* is mandatory </span>}
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" id="username" {...register("username", {required: true})} placeholder="Enter your username"/> 
                                    {errors.name && <span>*Username* is required</span>}
                                    <label htmlFor="password" >Password:</label>
                                    <input type="password" id="password" {...register("password", {required: true})} placeholder="Enter password"/>
                                    <label htmlFor="role">Role:</label>
                                    <select {...register("role")}>
                                        <option value="ADMIN">ADMIN</option>
                                        <option value="USER">USER</option>
                                    </select>
                                    {errors.name && <span >*Password* is required</span>}
                                    <input type={"submit"} id="submit" />
                                    {status?.type === 'success' && (<p className="text-success">Succesfully signed up</p>)}
                                    {status?.type === 'error' && <p>user already exists</p>}
                            </div>
                        </form>
                        <div className="login">
                            <p>Already have an account ? </p>
                            <Link to="/login" type="submit" className="btn btn-primary">
                                Login
                            </Link>
                        </div>
                    </div>
            </div>
            
            
           
        
     

    )
}
