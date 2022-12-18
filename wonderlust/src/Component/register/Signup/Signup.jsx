import React, { useState} from 'react'
import style from './signup.module.css'
import { VStack, Container, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import "./Recaptcha.css";

import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { SignUpAction } from '../../../Redux/Auth/actions'

const initialFormData = {
  email: "",
  fname: "",
  lname: "",
  password: "",
  checkStatus: false,
}


function Signup() {
  // states and misc
  const [formData, setFormData] = useState(initialFormData);
  const navigator = useNavigate();
  const dispatcher = useDispatch();


  // events and functions
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name] : value});    
  }

  const signupSuccess = () => {
    alert('Signed up successfully');
    clearForm();
    navigator('/login')
  }

  const signupError = (message) => {
    alert(message);
  }

  const clearForm = () => {
    setFormData(initialFormData)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatcher(SignUpAction(formData, signupSuccess, signupError));
  }
  
  return (
    <div className={style.Signup_continer}>
     
        <Container maxW='full' className={style.Container}>
      <h1 className={style.create}>Create an account.....</h1>
          <form onSubmit={handleSubmit}>
           
            <input className={style.Allinput} type="email" name="email" placeholder='Email address' 
         
            value={formData.email} 
            onChange={handleChange}
            />
            <br />
            <input className={style.Allinput} type="text" name='fname' placeholder='First name'
            
            value={formData.fname}
            onChange={handleChange}
            />
            <br />
            <input className={style.Allinput} type="text" name='lname' placeholder='Last name'
            
            value={formData.lname} 
            onChange={handleChange}
            
            />
            <br />
            <input className={style.Allinput} type="password" placeholder='Password' 
          
            name='password'
            value={formData.password} 
            onChange={handleChange}
            />
            <br />
            <span>
              {/* <input type="checkbox" className={style.checkbox} name='checkStatus' value={state.checkStatus} onChange={handleChange} /> Keep me signed in */}
               
              <div className="captcha">
      <div className="spinner">
        <label>
          <input
            type="checkbox"
            // onClick="$(this).attr('disabled','disabled');"
          />
          <span className="checkmark">
            <span>&nbsp;</span>
          </span>
        </label>
      </div>
      <div className="text">I'm not a robot</div>
      <div className="captcha_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/2048px-RecaptchaLogo.svg.png" />
        <p>Privacy - Terms</p>
      </div>
    </div>

            </span>
            {/* <div className={style.privcy}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</div> */}
            {/* <div className={style.privcy}>By creating an account, I agree to the Travelocity <Link to='#'>Terms and Conditions and Privacy Statement. </Link></div> */}
            <button className={style.continue_button} type='submit'>Continue</button>
          </form>
          <div className={style.Sign_in}>
            Aleardy have an account ? <Link to='/login' className={style.link} >Login</Link>

              <input type="checkbox" className={style.checkbox} name='checkStatus' value={formData.checkStatus} onChange={handleChange} /> Keep me signed in
            </span>
            <div className={style.privcy}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</div>
            <div className={style.privcy}>By creating an account, I agree to the Travelocity <Link to='#'>Terms and Conditions and Privacy formDatament. </Link></div>
            <button className={style.continue_button} type='submit'>Continue</button>
          </form>
          <div className={style.Sign_in}>
            Aleardy have an account ? <Link to='/login' >Sign in</Link>

          </div>
        </Container>

 

      <div className={style.background_imag}>
        <h1 className={style.easily}>Easily find your perfect trip.....</h1>
      </div>
    </div>
  )
}
  

export default Signup