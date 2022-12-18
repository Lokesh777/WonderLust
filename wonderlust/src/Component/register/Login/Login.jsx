import React,{useState} from 'react'
import style from '../Signup/signup.module.css'
import './login.css'
import {VStack,Container} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import '../Signup/Recaptcha.css'

import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
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
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
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

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatcher(SignInAction(formData, signupSuccess, signupError));
  }
  



  return (
	<div className={style.Signup_continer} id='login_again'>
   
    <Container maxW='md' className={style.Container}>
    <h1 className='sign'>Login....</h1>
      <form onSubmit={handleSubmit} >
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
        {/* <input  type="checkbox" className={style.checkbox} /> Keep me signed in */}

          
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
        {/* <div className={style.privcy}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</div > */}
        {/* <div className={style.privcy}>By signing in, I agree to the Travelocity <Link to='#'>Terms and Conditions and Privacy Statement. </Link></div> */}
        <button className={style.continue_button} type='submit'>Sign in</button>
      </form>
      <div className={style.Sign_in}>
		 <div> <Link to='#'>Forgot password ?</Link> </div>
        Aleardy have an account ? <Link to='/signup' className={style.link}>Create Account</Link>
      </div>
   </Container>
  
   <div className={style.background_imag}></div>
  </div>
  )
}

export default Login