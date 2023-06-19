
import {React, useEffect,useState } from "react";
import { decodeToken } from "react-jwt";
import axios from "axios";
import { GoogleOAuthProvider,GoogleLogin  } from '@react-oauth/google';
import { useDispatch,useSelector } from 'react-redux';
import { setLoginData,setUsersData,setLoginUsersData } from '../../app/reducer';
import { useHistory } from "react-router-dom";

const Login = () => {
 
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.app.LoginDetails.login);
  const user       = useSelector((state) => state.app.Users)
  const history = useHistory();
  const [passwordShow,setPasswordShow] = useState(false);

  const [state, setState] = useState({email: '',password:'',error:null});

  const handleChange = (event) => {
    setState({...state,[event.target.name]: event.target.value});
  }

  useEffect(() => {
    console.log(loginState);
    if (loginState) {
      // Redirect to another page when login state is true
      history.push("/dashboard"); // Replace "/dashboard" with your desired route
    }
  }, [loginState,, history]);

  
  const handleOAuthSuccess = (response) => {
    console.log(response);

    const decodedTokens = decodeToken(response.credential);

    let user ={name:decodedTokens.name,
    picture:decodedTokens.picture,
    email:decodedTokens.email,
    password:"admin@123",}
    
    dispatch(setUsersData(user))
    dispatch(setLoginUsersData(user))
    dispatch(setLoginData());
  };

  const handleOAuthFailure = () => {
    console.log("Login Failed");
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(state);
    const filteredArray = user.filter((obj) => obj.email==state.email && obj.password==state.password)
    console.log(filteredArray);
    if(filteredArray.length!=0){
      dispatch(setLoginData());
      dispatch(setLoginUsersData(filteredArray[0]))
    }else{
       setState({...state, error: "Credentials Mismatch"})
    }
  }
  return (
    <div className="auth-page-content mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-sm-5 mb-4 text-white-50"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card mt-4">
              <div className="card-body p-4">
                <div className="text-center mt-2">
                  <h5 className="text-primary">Welcome Back !</h5>
                  <p className="text-muted">Sign in to continue to Velzon.</p>
                </div>

                {state.error !== null ? (
                  <div className="alert alert-danger" role="alert">
                    <strong>{state.error}</strong> check it out!
                  </div>
                ) : null}

                

                <div className="p-2 mt-4">
                  <form>
                    <div className="mb-3">
                      <label for="username" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="float-end">
                        <a
                          href="auth-pass-reset-basic.html"
                          className="text-muted"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <label className="form-label" for="password-input">
                        Password
                      </label>
                      <div className="position-relative auth-pass-inputgroup mb-3">
                        <input
                        name="password"
                          type={passwordShow?"text":"password"}
                          className="form-control pe-5 password-input"
                          placeholder="Enter password"
                          onChange={handleChange}
                          id="password-input"
                        />
                        <button
                          className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                          type="button"
                          id="password-addon"
                          onClick={() => setPasswordShow(!passwordShow)}
                        >
                          <i className="ri-eye-fill align-middle"></i>
                        </button>
                      </div>
                    </div>

                   

                    <div className="mt-4">
                      <button onClick={handleLogin} className="btn btn-success w-100" type="submit">
                        Sign In
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      <div className="signin-other-title">
                        <h5 className="fs-13 mb-4 title">Sign In with</h5>
                      </div>
                      <div>
                    
                        <button
                          type="button"
                          className="btn  waves-light"
                        >
                        <GoogleOAuthProvider clientId="916412043044-lv3ec9767bk1nd4abgmsl5n7p7872gsn.apps.googleusercontent.com">
                        <GoogleLogin
                          scope="profile"
                                  onSuccess={handleOAuthSuccess}
                                  onError={handleOAuthFailure}
                                />
                        </GoogleOAuthProvider>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="mb-0">
                Don't have an account ?{" "}
                <a
                  href="auth-signup-basic.html"
                  className="fw-semibold text-primary text-decoration-underline"
                >
                  {" "}
                  Signup{" "}
                </a>{" "}
              </p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
