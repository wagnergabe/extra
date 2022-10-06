import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useMutation} from '@apollo/client';
import auth from '../utils/auth';
import {LOGIN} from '../utils/mutations';

function Login(props) {
    const [formState, setFormState] = useState({email:'', password:''});
    const [login,{error}] =useMutation(LOGIN);
    
    //submit form
    const handleFormSubmit = async(event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: {email: formState.email, password: formState.password},
            });
            const token = mutationResponse.data.login.token;
            auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };
// update state on form input
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
//borrow from module 22 
return (
    <main className="">
      <Link to="/signup">Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );

};

export default Login;
