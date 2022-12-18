import React, { useState } from 'react'
import style from '../Signup/signup.module.css'
import './login.css'
import { VStack, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SignInAction } from '../../../Redux/Auth/actions'


const initialFormData = {
  email: "",
  password: "",
}

function Login() {

  // states and misc
  const [formData, setFormData] = useState(initialFormData);
  const navigator = useNavigate();
  const dispatcher = useDispatch();


  // events functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  const signupSuccess = () => {
    alert('Looged In Successfully');
    clearForm();
    navigator('/')
  }

  const signupError = (message) => {
    alert(message);
  }

  const clearForm = () => {
    setFormData(initialFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatcher(SignInAction(formData, signupSuccess, signupError));
  }




  return (
    <div id='login_again'>
      <div className={style.Signup_continer}  >
        <div style={{ width: " 60%" }}>
          <img className={style.ImageHalfLogin} src="https://wallpapercave.com/wp/wp2258700.jpg" alt="Logo" />
        </div>
        {/* Signup_continer */}
        <div style={{ width: "40%" }}>
           <div maxW='md' className={style.Container}>
           
            <form onSubmit={handleSubmit} >
              
                 <h2 className={style.Signuph2}
                  >Login
                  </h2>

              <input className={style.Allinput} type="email" name="email" placeholder='Email address'
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              <input className={style.Allinput} type="password" name='password' placeholder='Password'
                value={formData.password}
                onChange={handleChange}
              />
              <br />
              <span>
                <input type="checkbox" className={style.checkbox} /> Keep me signed in
              </span>
              <br />
              <button className={style.continue_button} type='submit'>Sign in</button>
            
            </form>
             
              <div> 
                <Link to='#'> 
                  <p className={style.forgetPassword}>Forgot password ?</p>
                </Link> 
              </div>
          
            <div className={style.Sign_in}> 
              Aleardy have an account ? 
              <Link to='/signup'>
                <span className={style.SignTab} >Signup</span>  
              </Link>
            </div>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Login