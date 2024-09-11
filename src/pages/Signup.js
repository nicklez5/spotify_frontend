import React, {useState} from 'react'
import "./../css/signup.css"
import { Link , redirect} from 'react-router-dom'
import UserService from "../services/UserService";


function Signup(){
    const [status,setStatus] = useState('');

    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
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
                    
                        <form className="addUserForm" onSubmit={handleSignup} >
                            <div className="inputGroup">
                                <label htmlFor="email">Email:</label>
                                    
                                    <input type="text" id="email"  placeholder="Enter your email"/>
                                    
                                   
                                    <label htmlFor="FullName">Name:</label>
                                   
                                    
                                    
                                    <label htmlFor="password" >Password:</label>
                                   
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
export default Signup