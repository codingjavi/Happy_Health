import React, { useRef, useEffect, useState, useContext } from 'react'
import Navbar from './Navbar'
import AuthContext from '../context/AuthProvider';
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
import '../static/Dashboard.css' //we do have to import it
import axios from '../api/axios';
import useRefreshToken from '../hooks/useRefreshToken';

/*
{first ? (
    <section>
        <h1>Success!</h1>
        <p>
            <a href="#">Sign In</a>
        </p>
    </section>
) : (
    
)}
*/

function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const { auth } = useContext(AuthContext);
    const refresh = useRefreshToken();
    
    async function handleSubmit(event) {
        //send results to backend to calculate vitamins needed axios post request
        console.log(auth)
        //wait for api call to return response then redirect
        try {

            const response = await axios({ 
                method: 'get', 
                url: '/api/dashboard', 
                headers: { 'Authorization': 'Bearer ' + auth.accessToken, 'Content-Type': 'application/json' } })
            /*
            const response = await axios.get('/api/dashboard', 
                JSON.stringify({}),
                {
                    headers: {
                        'Authorization': `Bearer ${auth.accessToken}`,
                        'Content-Type':'application/json',
                        
                    }
                    
                }
            );*/
            //what to do with data
            console.log(response);

        } catch(err) {

            //if error then sends user back to login (to reauthenticate)
                //once log back it then it sends them back to where they were
            console.log(err);
            navigate('/login', { state: { from: location },
            replace:true
        });

            /*
            // Handle error
            if (err.response) {
                // The request was made and the server responded with a status code
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                // The request was made but no response was received
                console.log(err.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', err.message);
            }*/
        }
        
    }

    
        return (
            
            <body>
                <Navbar />
                <h1>Welcome to Happy Health {auth.user}</h1>

                <div class = "eval">     
                    <img class = "eval_pic" src="assets/images/eval.jpg" alt="none" />
                    <h2><Link to = "/survey"> Get evaluated here!</Link></h2>
                    <p>By taking a quick survey we can immediately see what vitamins will be best for you</p>
                </div> 
               
                
                <div class = "check">
                    <img class = "check_pic" src="assets/images/vitamins.jpg" alt="none" />
                    <h2> <Link to="/results"> Check your vitamins here! </Link></h2>
                    <p>Keep track of you vitamins here</p>
                </div>
            </body>
    )
    }
    


export default Dashboard


