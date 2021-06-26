import React,{useState} from 'react'
import "./Login.css"
import { GoogleLogin } from 'react-google-login';

function Login() {
    const [pink,setPink]=useState("pinkbox");
    const [signin,setSignin]=useState("signin");
    const [signup,setSignup]=useState("signup nodisplay");
    function function1(){
        setPink("pinkbox transform");
        setSignup("signup");
        setSignin("signin nodisplay");   
    }
    function function2(){
        setPink("pinkbox");
        setSignup("signup nodisplay");
        setSignin("signin");  
    }
 
      const responseGoogle = (response) => {
        console.log(response);
      }
    function Signup(){
        const Username=document.getElementById('username').value;
        const Email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        const cpassword=document.getElementById('cpassword').value;
        if (password!==cpassword) {
            alert("Passwords don't Match");
        }
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(Email)){
            alert("Email is incorrect");
        }
        if (password.length<8){
            alert("Password is too short");
        }
    }  
    return (
        <div>
            <div class="logincontainer">
                <div class="welcome">
                    <div class={pink}>
                        <div class={signup}>
                            <h1 className="head">register</h1>
                            <form autocomplete="off">
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Username" name="name" id='username' required />
                                <label htmlFor="name" className="form__label">Username</label>
                           </div>     
                           <div className="form__group field">
                                <input type="email" className="form__field" placeholder="Email" name="name" id='email' required />
                                <label htmlFor="name" className="form__label">Email</label>
                           </div>     
                           <div className="form__group field">
                                <input type="password" className="form__field" placeholder="Password" name="name" id='password' required />
                                <label htmlFor="name" className="form__label">Password</label>
                           </div>     
                           <div className="form__group field">
                                <input type="password" className="form__field" placeholder="Password" name="name" id='cpassword' required />
                                <label htmlFor="name" className="form__label">Confirm Password</label>
                           </div>     
                        
                               
                                
                                <button class="buttoni submit" onClick={Signup}>create account</button>
                                <p>-------------  <span>OR</span>  ------------</p>
                                {/* <div class="google-btn">
                        <div class="google-icon-wrapper">
                            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <p class="btn-text"><b>Sign in with google</b></p>
                        </div> */}
                        <GoogleLogin
    clientId="1095483584862-aodjl57fbm5980mlhueo0rq3m27mm2b9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />


                            </form>
                        </div>
                    <div class={signin}>
                        <h1 className="head">sign in</h1>
                        <form class="more-padding" autocomplete="off">
                        <div className="form__group field">
                                <input type="password" className="form__field" placeholder="Lusername" name="name" id='name' required />
                                <label htmlFor="name" className="form__label">Username</label>
                           </div>                           
                           <div className="form__group field">
                                <input type="password" className="form__field" placeholder="Lpassword" name="name" id='name' required />
                                <label htmlFor="name" className="form__label">Password</label>
                           </div>   
                           <button class="buttoni submit">login</button>
                           <p>-------------  <span>OR</span>  ------------</p>
                           <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

                        {/* <div class="google-btn" data-onsuccess={onSignIn}>
                        <div class="google-icon-wrapper">
                            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <p class="btn-text"><b>Sign in with google</b></p>
                        </div> */}
                        <GoogleLogin
                        clientId="1095483584862-aodjl57fbm5980mlhueo0rq3m27mm2b9.apps.googleusercontent.com"
                        buttonText="Register"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                            />   
               
                        </form>
                    </div>
                    </div>
                    <div class="leftbox">
                    <h2 class="title"><br/>VISHWAS</h2>
                    <p class="desc p">send your perfect e-mail</p>
                    <img class="flower smaller" src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg" alt="1357d638624297b" border="0"/>
                    <p class="account p">have an account?</p>
                    <button class="buttoni" id="signin" onClick={ function2  }>login</button>
                    </div>
                    <div class="rightbox">
                        <h2 class="title"><br/>VISHWAS</h2>
                        <p class="desc p"> send your perfect e-mail</p>
                        <img class="flower" src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"/>
                        <p class="account p">don't have an account?</p>
                        <button class="buttoni" id="signup" onClick={ function1  }>sign up</button>
                    </div>
                </div>
                </div>

                </div>
        // </div>
    )
}

export default Login