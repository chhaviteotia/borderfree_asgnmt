import React, { useState } from 'react';
import "./Signup.css";
import intro from "../images/intro.svg"
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: '', email: '', phone: '', state: '', password: '', cpassword: '' });

  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, state, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name, email, phone, state, password, cpassword
      })
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/login');
    }
  }


  return (
    <>
      <Navbar />
      <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">

        <div class="col-md-6 intro-img">
          <img src={intro} alt='intro' />
        </div>
        <div class="wrapper wrapper--w680">
          <div class="card card-1">
            <div class="card-heading"></div>
            <div class="card-body">
              <h2 class="title">Registration Info</h2>
              <form method="POST">
                <div class="input-group">
                  <input class="input--style-1" type="text" autoComplete='off' value={user.name} onChange={handleInputs} placeholder="NAME" name="name" />
                </div>
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <input class="input--style-1 js-datepicker" type="text" autoComplete='off' value={user.email} onChange={handleInputs} placeholder="EMAIL" name="email" />
                      <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <input class="input--style-1 js-datepicker" type="number" autoComplete='off' value={user.phone} onChange={handleInputs} placeholder="PHONE" name="phone" />

                    </div>
                  </div>
                </div>
                <div class="input-group">
                  <input class="input--style-1 js-datepicker" type="text" autoComplete='off' value={user.state} onChange={handleInputs} placeholder="STATE" name="state" />
                </div>
                <div class="input-group">
                  <input class="input--style-1 " type="password" autoComplete='off' value={user.password} onChange={handleInputs} placeholder="PASSWORD" name="password" />
                </div>
                <div class="input-group">
                  <input class="input--style-1" type="password" autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='CONFIRM PASSWORD' name="cpassword" />
                </div>
                <div class="p-t-20">
                  <input class="btn btn--radius btn--green" type="submit" name='signup' value='Register' onClick={PostData} />
                </div>
              </form>
            </div>
            <div className='signup-image'>
              <NavLink to='/login' className='signup-image-link'>I am already registered</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Signup;
