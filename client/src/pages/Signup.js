import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useMutation} from '@apollo/client';
import auth from '../utils/auth';

import {ADD_USER} from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({username:'', email:'', password:''});
    const [addUser] =useMutation(ADD_USER);

    //submit form
    const handleFormSubmit = async(event) => {
        event.preventDefault();

        const mutationResponse = await addUser({
        variables: {username:formState.username  ,email: formState.email, password: formState.password},
            });
            const token = mutationResponse.data.addUser.token;
            auth.login(token);

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
    <div className="container my-1">
      <Link to="/login">Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
      
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
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
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

};

export default Signup;
