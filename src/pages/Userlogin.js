import { useState } from 'react';
import useFetch from './useFetch';
import React from 'react'
import { Group } from '@mui/icons-material';
import CallingLogin from './CallingLogin';
import { Link } from "react-router-dom";


export default function UserLogin ({myfunction, useriddata}) {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const HandleEmail = (event) => {
        setEmail(event.target.value);

    }

    const HandlePassword = (event) => {
        setPassword(event.target.value);

    }

    // Login API

    // console.log(email)
    // console.log(password)

    

    const [submitForm, setsubmitForm] = React.useState(false)


    const CheckUserDetails = () =>{
       

        setsubmitForm(true);
        

    }

 




    


    return (
    <>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value = {email}
            onChange = {HandleEmail}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            className="form-control"
            placeholder="Enter password"
            value = {password}
            onChange = {HandlePassword}
          />
        </div>
        <div className="d-grid">

          <button  type="submit" className="btn btn-primary" onClick = {CheckUserDetails}>
            Submit
          </button>
      

        {submitForm && <CallingLogin userdata ={[email, password, useriddata] } myfunction = {myfunction} /> }

        </div>
    </>
    )
  }