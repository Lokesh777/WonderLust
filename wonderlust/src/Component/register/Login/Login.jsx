import React,{useState} from 'react'
import style from '../Signup/signup.module.css'
import './login.css'
import {VStack,Container} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../Signup/Recaptcha.css'

function Login() {

  
  const [state, setState] = useState({
    email: "",
    password: "",
    })
  
    
  const handleChange = (e)=>{
    
    const {name, value} = e.target
    setState({
      ...state, [name] : value
    })
    
  }

  const handleSubmit = (e)=>{

    e.preventDefault();
    const { email, password } = state;
    console.log(email, password);
    fetch("http://localhost:8080/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          // window.location.href = "./userDetails";
        }
      });
  }



  return (
	<div className={style.Signup_continer} id='login_again'>
   
    <Container maxW='md' className={style.Container}>
    <h1 className='sign'>Login....</h1>
      <form onSubmit={handleSubmit} >
        <input className={style.Allinput} type="email" name="email" placeholder='Email address'
        value={state.email} 
        onChange={handleChange}
        />
        <br />
        <input className={style.Allinput} type="password" name='password' placeholder='Password'
        value={state.password} 
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