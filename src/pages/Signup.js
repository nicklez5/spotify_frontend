import axios from "axios";
import React, {useState} from 'react'
import "./../css/signup.css"
import { Link } from 'react-router-dom'

const baseUrl = "http://localhost:8080/"

const Signup = () => {
    return (
            <div className="addUser">
            
                <form className="addUserForm">
                    <div className="inputGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" autoComplete="off" placeholder="Enter your email"/>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" autoComplete="off" placeholder="Enter your name"/> 
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" autoComplete="off" placeholder="Enter password"/>
                        <button type="button" className="btn btn-success"><Link to="/home2" type="submit" class="btn btn-primary">Sign up</Link></button>
                    </div>
                </form>
                <div className="login">
                    <p>Already have an account ? </p>
                    <Link to="/home2" type="submit" class="btn btn-primary">
                        Login
                    </Link>
                </div>
            </div>

    )
}
export default Signup