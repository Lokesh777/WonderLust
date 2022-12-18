import React, { useState } from 'react'
import style from './signup.module.css'
import { VStack, Container, Img, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatcher(SignUpAction(formData, signupSuccess, signupError));
  }

  return (
    <div >
      {/* <h1 className={style.create}>  </h1> */}
        <div
        className={style.Signup_continer} 
        >
          
            <div style={{width:" 60%"}}>
               <img className={style.ImageHalf} src="https://www.davestravelpages.com/wp-content/uploads/2019/07/wanderlust-quotes.jpg" alt="Logo" />
            </div>
         
            <div style={{width:" 40%"}}>
               <div maxW='md' className={style.Container}>
                <form 
             
                onSubmit={handleSubmit}>
                  <h2
                     className={style.Signuph2}
                  >Signup 
                  </h2>
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
                    <input type="checkbox" className={style.checkbox} name='checkStatus' value={formData.checkStatus} onChange={handleChange} /> Keep me signed in
                  </span>
                    <br />

                    <button className={style.continue_button} type='submit'>Continue</button>
              
                </form>
                <br />
                <div className={style.Sign_in}>
                  Aleardy have an account ? 
                  <Link to='/login' >
                    <span className={style.SignTab} >Login</span>                   
                  </Link>
                </div>
                </div>
            </div>
          
        </div>
    </div>
  )
}


export default Signup