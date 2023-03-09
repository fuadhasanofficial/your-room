import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext'
import './register.css'

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => {
                console.error(err);
            })



    }
    return (
        <div>

            <h1>Register</h1>
            <form onSubmit={handleRegister} className='w-50 mx-auto border p-2'>
                <label htmlFor="email"></label>
                <input className='w-75' type="email" name="email" id="" />
                <br />
                <div className='mt-2'>
                    <label htmlFor="email"></label>
                    <input className='w-75' type="password" name="password" id="" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;