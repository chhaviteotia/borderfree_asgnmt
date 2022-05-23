
import React, {useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import "./Login.css";
import intro from "../images/intro.svg";
import Navbar from "../navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e) =>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method :"POST",
      headers : {"Content-Type":"application/json"},
      body:JSON.stringify({
          email, password
      })
    });
    const data = await res.json();
    if(res.status === 400 || res.status === 422 || !data){
      window.alert("Invalid Credential");
    }else{
      window.alert("Login Successful");
      navigate('/products');
    }
  }

  return (
    <>
    <Navbar/>
    <div class="limiter">
		<div class="container-login100">
			
      <div class="col-md-6 intro-img">
<img src={intro} alt='intro'/>
</div>
<div class="wrap-login100">
				<div class="login100-form-title" >
					<span class="login100-form-title-1">
						Sign In
					</span>
				</div>

				<form class="login100-form validate-form">
					<div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span class="label-input100">Email</span>
						<input class="input100" type="text" autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter Email"/>
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="pass" autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
						<span class="focus-input100"></span>
					</div>

					<div class="flex-sb-m w-full p-b-30">
						<div className='forgot-password'>
							<a href="#" class="txt1">
								Forgot Password?
							</a>
						</div>
					</div>

					<div class="container-login100-form-btn">
						<input className="login100-form-btn" type='submit' name='signin' id='signin' value='Login In' onClick={loginUser}/>
					</div>
          <div className='create-account-div'><NavLink to='/signup' className='create-account-link'>Create an account</NavLink></div>
				</form>
			</div>
		</div>
    
	</div>
    </>

  );
}

export default Login;
