import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const { login } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => {
                console.error(err);
            })



    }

    return (
        <div>

            <h1>Log in</h1>
            <form onSubmit={handleRegister} className='w-50 mx-auto border p-2'>
                <label htmlFor="email"></label>
                <input className='w-75' type="email" name="email" id="email" />
                <br />
                <div className='mt-2'>
                    <label htmlFor="email"></label>
                    <input className='w-75' type="password" name="password" id="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;