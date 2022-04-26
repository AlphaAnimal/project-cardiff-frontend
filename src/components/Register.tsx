import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const API_URL = 'http://localhost:5000/api/users/';

  // Maybe put this in a try catch
  const register = async (userData : any) => {
    const response = await axios.post(API_URL, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        navigate('/login')
    }

    return response.data
  }

  const onSubmit = (e: any) => {
      console.log('submittingggg    ')
    if (password !== password2) {
        console.log('Passwords do not match!')
    } else {
        const userData = {
        name,
        email,
        password,
        }
        try{
            register(userData)
        }
        catch (error: any) {
            console.log(error)
        }
        
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button onClick={(e) => onSubmit(e)} className='btn btn-block'>
              Submit
            </button>
          </div>
        
      </section>
    </>
  )
}

export default Register