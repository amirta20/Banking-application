
import React, { useState } from 'react';
import './Login.css';
// import {Link} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (email.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      const confirm=window.confirm("Please enter both email and password.");
      if(confirm)
      {
        navigate('/');
      }
    }
  };

  return (
    <div className='login_container'>
        <div>
        
          <form>

            <h3 style={{color:'black'}}>Login</h3><br/>
            <label>
              <input
                type="text"
                value={email}
                placeholder='Email/Username'
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={account}
                placeholder='Accountnumber'
                onChange={(e) => setAccount(e.target.value)}
              />
            </label>
            <br/>
            <label>
              <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br /><br/>
           
            <center><Link to='/MenuAppBar'><button type="button" class="btn btn-light" onClick={handleLogin} style={{color:"black"}} >Login</button></Link><br/></center><br/>
            <div className='Link' /*onClick={()=>props.onFormSwitch('signup')}*/>New user?<Link to='Signin'><p style={{color:"black"}}>Sign up</p></Link></div>
          </form>
        </div>
    </div>
  );
};

export default Login;

