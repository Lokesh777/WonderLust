import React, { useState} from 'react'
import style from './signup.module.css'
import { VStack, Container, Img } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Signup() {

 

  const [state, setState] = useState({
  email: "",
  fname: "",
  lname: "",
  password: "",
  checkStatus: String,

  })

  

  const handleChange = (e)=>{
    
    const {name, value} = e.target
    setState({
      ...state, [name] : value
    })
    
  }

  const handleSubmit = (e)=>{

    e.preventDefault();
    const { email,fname,lname, password,checkStatus } = state;
   
    if(email && fname && lname && password && (checkStatus=== checkStatus)){

    fetch("http://localhost:8080/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        fname,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("Signup successful");
         
          // window.location.href = "./Home";
        } 
        if(data.error == 'User_Exists'){
          alert("Please try to another email")
        }

      });
    }else{
      alert("invalid")
    }
  }
  
  return (
    <div className={style.Signup_continer}>
      <h1 className={style.create}>Create an account</h1>
      <VStack  >
        <Container maxW='md' className={style.Container}>
          <form onSubmit={handleSubmit}>
            <input className={style.Allinput} type="email" name="email" placeholder='Email address' 
         
            value={state.email} 
            onChange={handleChange}
            />
            <br />
            <input className={style.Allinput} type="text" name='fname' placeholder='First name'
            
            value={state.fname}
            onChange={handleChange}
            />
            <br />
            <input className={style.Allinput} type="text" name='lname' placeholder='Last name'
            
            value={state.lname} 
            onChange={handleChange}
            
            />
            <br />
            <input className={style.Allinput} type="password" placeholder='Password' 
          
            name='password'
            value={state.password} 
            onChange={handleChange}
            />
            <br />
            <span>
              <input type="checkbox" className={style.checkbox} name='checkStatus' value={state.checkStatus} onChange={handleChange} /> Keep me signed in
            </span>
            <div className={style.privcy}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</div>
            <div className={style.privcy}>By creating an account, I agree to the Travelocity <Link to='#'>Terms and Conditions and Privacy Statement. </Link></div>
            <button className={style.continue_button} type='submit'>Continue</button>
          </form>
          <div className={style.Sign_in}>
            Aleardy have an account ? <Link to='/login_again' >Sign in</Link>
          </div>
        </Container>
      </VStack>
    </div>
  )
}
  

export default Signup