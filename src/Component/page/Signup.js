import {React , useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route , useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch,useSelector } from "react-redux";
import { setUsersData,setLoginUsersData,setLoginData } from "../../app/reducer";
const Signup = () => {
    const user = useSelector((state) => state.app.Users);
    const loginState = useSelector((state) => state.app.LoginDetails.login);
    const [signup,setSignup] = useState({name:null,email:null,password:null, picture: "assets/images/users/avatar-1.jpg"})
    const [error,setError] = useState({password:null,email:null,password:null,connect:null});
    const [passwordShow,setPasswordShow] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(loginState);
        if (loginState) {
          // Redirect to another page when login state is true
          history.push("/dashboard"); // Replace "/dashboard" with your desired route
        }
    }, [loginState, history]);

    const handleChange = (event) => {
        setSignup({...signup,[event.target.name]: event.target.value});
    }
    
    const handleSingup=(e)=>{
         e.preventDefault();
         verifyErrors();
         var errorCheck = Object.entries(error).filter(([key, value]) => value !== null)
          console.log(errorCheck)
          console.log(signup);
         if(errorCheck.length ==0){
            dispatch(setUsersData(signup));
            dispatch(setLoginUsersData(signup));
            dispatch(setLoginData());
         }
    }
    const verifyErrors = () => {
        const { name, email, password } = signup;
        const errors = {
          name: null,
          email: null,
          password: null,
          connect: null
        };
      
        if (!name) {
          errors.name = 'Name is required';
        }
      
        if (!email) {
          errors.email = 'Email is required';
         
        } else if (!isValidEmail(email)) {
          errors.email = 'Invalid email format';
        }else{
            const filteredArray = user.filter((obj) => obj.email==signup.email);
            if (filteredArray.length!=0) {
                errors.email = ' email already exits';
            }
        }
      
        if (!password) {
          errors.password = 'Password is required';
        } else if (password.length < 6) {
          errors.password = 'Password should be at least 6 characters long';
        }
      
        setError(errors);
      };
      
      // Function to check if email is valid
      const isValidEmail = (email) => {
        // Implement your email validation logic here
        // Example: Using a regular expression pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
     
      
  return (
        <div className="auth-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                            
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card mt-4">

                            <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h5 className="text-primary">Create New Account</h5>
                                    <p className="text-muted">Get your free velzon account now</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <form className="needs-validation" novalidate onSubmit={handleSingup}>
                                    <div className="mb-3">
                                            <label for="username" className="form-label">Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" name="name" onChange={handleChange} id="username" placeholder="Enter username" required/>
                                            <div className="invalid-feedback">
                                                Please enter username
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="useremail" name="email" onChange={handleChange} placeholder="Enter email address" required/>
                                            <div className="invalid-feedback">
                                                Please enter email
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" for="password-input">Password</label>
                                            <div className="position-relative auth-pass-inputgroup">
                                                <input type={passwordShow?"text":"password"} name="password" onChange={handleChange} className="form-control pe-5 password-input" onpaste="return false" placeholder="Enter password" id="password-input" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" onClick={() => setPasswordShow(!passwordShow)} type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                <div className="invalid-feedback">
                                                    Please enter password
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon <a href="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</a></p>
                                        </div>

                                        <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                            <h5 className="fs-13">Password must contain:</h5>
                                            <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                            <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                            <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                            <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                        </div>

                                        <div className="mt-4">
                                            <button className="btn btn-success w-100" type="submit">Sign Up</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <div className="signin-other-title">
                                                <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                            </div>

                                            <div>
                                                <button type="button" className="btn btn-danger btn-icon waves-effect waves-light"><i className="ri-google-fill fs-16"></i></button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                  
                        </div>
       

                        <div className="mt-4 text-center">
                            <p className="mb-0">Already have an account ? <a href="auth-signin-basic.html" className="fw-semibold text-primary text-decoration-underline"> Signin </a> </p>
                        </div>

                    </div>
                </div>
  
            </div>
        
        </div>
       
  );
};
export default Signup;
