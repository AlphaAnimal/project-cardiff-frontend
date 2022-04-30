import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/userServices';


const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e: any) => {
    const userData = {
        email,
        password,
    }
    try{
        const res = login(userData);
        res.then(() => navigate('/home'))
    }
    catch (error: any) {
        console.log(error)
    }
    
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Login
        </h1>
        <p>Please enter your details</p>
      </section>

      <section className='form'>
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
            <button onClick={(e) => onSubmit(e)} className='btn btn-block'>
              Submit
            </button>
          </div>
        
      </section>
    </>
  )
}

export default Login