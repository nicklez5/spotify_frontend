import '../css/login.css';
import { useState } from 'react';
import { Link , redirect} from 'react-router-dom'
import UserService from '../services/UserService';
import { useForm } from 'react-hook-form';
import { setAuthToken } from '../helpers/setAuthToken';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState('');
  const onSubmit = (data) => {
      console.log(data)
      setUsername(data.username);
      setPassword(data.password);
      UserService.login(username,password)
        .then((response) => {
            console.log(response)
            const token = response.data.token;
            localStorage.setItem('token',token);
            localStorage.setItem('username',username);
            setAuthToken(token);
            setStatus({type: 'success'});
            window.location.href = '/home'
          })
          .catch((err) => {
            setStatus({type: 'error',err});
            console.log(err.response);
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
        <div className="loginUser">
          <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputGroup">
          
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  {...register('username', { required: true })}
                  placeholder="Enter username"
                />
                {errors.username && <span>Username is mandatory</span>}
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  {...register('password', { required: true })}
                  placeholder="Enter password"
                />
                {errors.password && <span>Password is required</span>}
                <input type="submit" id="submit" />
                {status?.type === 'success' && (
                  <p className="text-success">Successfully logged in</p>
                )}
                {status?.type === 'error' && <p>Failed login</p>}
            </div>
          </form>
          <Link className="go_back"to="/">Go back</Link>
       </div>
      </div>
        
)}

export default Login;
