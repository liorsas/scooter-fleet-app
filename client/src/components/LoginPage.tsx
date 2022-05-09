import userUtils from '../utils/usersUtils'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
    const [login,setLogin] = useState({username:"" , passward:0})

    const getLogin = async() => {

          let obj = {
        username: login.username,
        passward: login.passward,
      };
      
      let resp = await userUtils.loginUser(obj)
      console.log(resp)
      if(resp) {
        navigate("/menu")
      }



    
        
    }

    return (
           <div className="login-page">
     
      <div className="login-box">
        <div className="log-form">
          <h1>Login Page</h1>
          <br />
          <label className='log-lbl-user' >
            User Name:
            <input
              className="log-inp"
              type="text"
              name="username"
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
            />
          </label>
          <br />
          <label className='log-lbl-pass' >
            Passward:
            <input
              className="log-inp"
              type="password"
              name="pass"
              onChange={(e) =>
                setLogin({ ...login, passward: parseInt(e.target.value) })
              }
            />
          </label>

          <br />

         
          <input
            className="log-btn"
            type="button"
            value="Sign In"
            onClick={getLogin}
          />

          <br />
        
        </div>
      </div>
    </div>
    )
}
export default LoginPage