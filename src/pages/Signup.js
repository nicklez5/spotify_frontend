import React, {useState} from 'react'
import "./../css/signup.css"
import { Link } from 'react-router-dom'
import UserService from "../services/UserService";
import { useForm } from "react-hook-form";

export default function Signup() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        UserService.register(data.username,data.password,data.email,"user")
    };
    return (
            <div className="addUser">
                <form className="addUserForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputGroup">
                        <label htmlFor="email">Email:</label>
                            <input type="text" id="email" {...register("email", {required: true})} placeholder="Enter your email"/>
                            {errors.email && <span>*Email* is mandatory </span>}
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" {...register("username", {required: true})} placeholder="Enter your username"/> 
                            {errors.name && <span>*Username* is required</span>}
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" {...register("password", {required: true})} placeholder="Enter password"/>
                            {errors.name && <span >*Password* is required</span>}
                            <input type={"submit"} id="submit" />
                    </div>
                </form>
                <div className="login">
                    <p>Already have an account ? </p>
                    <Link to="/home2" type="submit" className="btn btn-primary">
                        Login
                    </Link>
                </div>
            </div>

    )
}
