import React,{useState} from 'react'
import style from '../Signup/signup.module.css'
import './login.css'
import {VStack,Container} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
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
    <h1 className='sign'>Sign in</h1>
    <VStack  >
    <Container maxW='md' className={style.Container}>
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
        <input  type="checkbox" className={style.checkbox} /> Keep me signed in
        </span>
        <div className={style.privcy}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</div >
        <div className={style.privcy}>By signing in, I agree to the Travelocity <Link to='#'>Terms and Conditions and Privacy Statement. </Link></div>
        <button className={style.continue_button} type='submit'>Sign in</button>
      </form>
      <div className={style.Sign_in}>
		 <div> <Link to='#'>Forgot password ?</Link> </div>
        Aleardy have an account ? <Link to='/signup'>Create one</Link>
      </div>
   </Container>
   </VStack>
  </div>
  )
}

export default Login