import React, {useState,useContext,useEffect} from "react";
import { GoogleLogin } from "react-google-login";
import {Context as AuthContext} from "../context/AuthContext";
import "../css/Login.css";

const LoginPage = ({history}) => {
  const {signin,signup,tryLocalLogin,Osignin}=useContext(AuthContext);
  const [pink, setPink] = useState("pinkbox");
  const [class_signin, setClass_signin] = useState("signin");
  const [class_signup, setClass_signup] = useState("signup nodisplay");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[username,setUsername]=useState("");
  const[cpassword,setCpassword]=useState("");
  function function1() {
    setPink("pinkbox transform");
    setClass_signup("signup");
    setClass_signin("signin nodisplay");
  }
  function function2() {
    setPink("pinkbox");
    setClass_signup("signup nodisplay");
    setClass_signin("signin");
  }
  useEffect(()=>{tryLocalLogin(history)},[tryLocalLogin,history]);
  return (
    <div>
      <div className="logincontainer">
        <div className="welcome">
          <div className={pink}>
            <div className={class_signup}>
              <h1 className="head">register</h1>
              <form autoComplete="off">
                <div className="form__group field">
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Username"
                    onChange={({target})=>{setUsername(target.value)}}
                    value={username}
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Username
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="email"
                    className="form__field"
                    placeholder="Email"
                    onChange={({target})=>{setEmail(target.value)}}
                    value={email}
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Email
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="password"
                    className="form__field"
                    placeholder="Password"
                    onChange={({target})=>{setPassword(target.value)}}
                    value={password}
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Password
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="password"
                    className="form__field"
                    placeholder="Password"
                    onChange={({target})=>{setCpassword(target.value)}}
                    value={cpassword}
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Confirm Password
                  </label>
                </div>
                <button className="buttoni submit" onClick={()=>{signup({email,password,username,history,cpassword})}}>
                  create account
                </button>
                <p>
                  ------------- <span>OR</span> ------------
                  <span onClick={()=>{function2()}} style={{textAlign:"center",marginTop:"5px"}}>SignIn with Google</span>
                </p>
              </form>
            </div>
            <div className={class_signin}>
              <h1 className="head">sign in</h1>
              <form className="more-padding" autoComplete="off">
                <div className="form__group field">
                  <input
                    type="password"
                    className="form__field"
                    placeholder="username"
                    onChange={({target})=>{setUsername(target.value)}}
                    value={username}
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Username
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="password"
                    className="form__field"
                    placeholder="password"
                    onChange={({target})=>{setPassword(target.value)}}
                    value={password}
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Password
                  </label>
                </div>
                <button className="buttoni submit" onClick={()=>{console.log("hi manvir");signin({email,password,history})}}>login</button>
                <p>
                  ------------- <span>OR</span> ------------
                </p>
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="//fonts.googleapis.com/css?family=Open+Sans"
                async />
                <GoogleLogin
                  buttonText="SignIn"
                  clientId="1095483584862-aodjl57fbm5980mlhueo0rq3m27mm2b9.apps.googleusercontent.com"
                  onSuccess={(response)=>{Osignin({username:response.profileObj.name,token:response.tokenId,history,email:response.profileObj.email})}}
                />
              </form>
            </div>
          </div>
          <div className="leftbox">
            <h2 className="title">
              <br />
              EzyMail
            </h2>
            <p className="desc p">Send your perfect e-mail</p>
            <img
              className="flower smaller"
              src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg"
              alt="1357d638624297b"
              border="0"
            />
            <p className="account p">have an account?</p>
            <button className="buttoni" id="signin" onClick={function2}>
              login
            </button>
          </div>
          <div className="rightbox">
            <h2 className="title">
              <br />
              EzyMail
            </h2>
            <p className="desc p"> send your perfect e-mail</p>
            <img
              className="flower"
              src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"
              alt="flower"
            />
            <p className="account p">don't have an account?</p>
            <button className="buttoni" id="signup" onClick={function1}>
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
