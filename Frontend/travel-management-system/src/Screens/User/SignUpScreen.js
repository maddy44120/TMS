/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { createLogger } from "redux-logger";
import { signup } from "../../Actions/UserActions";
import Header from "../../Components/Header";
import { USER_SIGNUP_RESET } from "../../Constants/UserConstants";

const SignUpScreen = (props) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [mobile_no,setMobile_no] = useState("");
    const [aadhar_card,setAadhar_card] = useState("");
    const [license_no,setLicense_no] = useState("");
    const [dob,setDob] = useState("");
    const [role,setRole] = useState("USER");

    const [nameError,setNameError] = useState("");
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [mobile_noError,setMobile_noError] = useState("");
    const [aadhar_cardError,setAadhar_cardError] = useState("");
    const [license_noError,setLicense_noError] = useState("");
    const [dobError,setDobError] = useState("");
    const [roleError,setRoleError] = useState("")

    const {loading,response,error} = useSelector(store => store.userSignup)
    const userSignin = useSelector(store => store.userSignin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSignUp = () => {
        console.log("Before Validations")
        if((role === "USER" || role === "") && userSignin.response &&userSignin.response.data.role === "ADMIN")
            setRoleError("Select a valid role")
        else
            setRoleError("")
        if(name.length<1)
            setNameError("Name is required")
        else
        setNameError("")
        if(!email)
            setEmailError("Email is required")
        else
            setEmailError("")
        if(!password)   
            setPasswordError("Password is required ")
        else if(!password.match("((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})"))
            setPasswordError("Invalid Password")
        else
            setPasswordError("")
        if(!mobile_no)
          setMobile_noError("Mobile No is required")
        else if(mobile_no.length>13 || mobile_no.length<10)
          setMobile_noError("Invalid Mobile No")
        else 
            setMobile_noError("")
        if(!aadhar_card) 
           setAadhar_cardError("Aadhaar No must be supplied")
        else if(aadhar_card.length>15 || aadhar_card.length<12)
           setAadhar_cardError("Invalid Aadhaar No")
        else
          setAadhar_cardError("")
        if(!license_no)    
          setLicense_noError("License No must be supplied")
        else if(license_no.length>15 || license_no.length<15)
          setLicense_noError("Invalid License No")
        else
          setLicense_noError("")
        if(!dob)
          setDobError("DOB must be supplied")
        else
            setDobError("")
       if(name && 
        email && 
        password &&
        mobile_no &&
        aadhar_card &&
        license_no &&
        dob)
        {console.log("After Validations")
         dispatch(signup(name,email,password,mobile_no,aadhar_card,license_no,dob,role))
    }}

    useEffect(()=>{
            if(response && response.status === 200){
                navigate("signin")
                dispatch({
                    type : USER_SIGNUP_RESET,
                })
            }
    },[loading,response,error,nameError,props.history])

    return (
        <div className="Screen">
                <div>
                    <Header title="SignUp"/>
                    {
                        error && error.status === "error" && <h5 className="text-danger text-center">{error.message}</h5>
                    }
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            
                            <div className="row">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input required onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"  placeholder="Name"></input>
                                   <h6 className="text-danger text-center">{nameError}</h6>
                                </div>

                            <div className="mb-3">
                                <label className="form-label">Email Id</label>
                                <input required onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"  placeholder="abc@example.com"></input>
                                <h6 className="text-danger text-center">{emailError}</h6>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input required onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"  placeholder="********"></input>
                                <h6 className="text-danger text-center">{passwordError}</h6>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile Number</label>
                                <input required onChange={(e)=>{setMobile_no(e.target.value)}} type="mobile_no" className="form-control"  placeholder="+91"></input>
                                <h6 className="text-danger text-center">{mobile_noError}</h6>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Aadhaar Card</label>
                                <input required onChange={(e)=>{setAadhar_card(e.target.value)}} type="aadhar_card" className="form-control"  placeholder="12345"></input>
                                <h6 className="text-danger text-center">{aadhar_cardError}</h6>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">License No</label>
                                <input required onChange={(e)=>{setLicense_no(e.target.value)}} type="license_no" className="form-control"  placeholder="ABC12345"></input>
                                <h6 className="text-danger text-center">{license_noError}</h6>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">DOB</label>
                                <input required onChange={(e)=>{setDob(e.target.value)}} type="date" className="form-control"  placeholder="YYYY-MM-DD"></input>
                                <h6 className="text-danger text-center">{dobError}</h6>
                            </div>

                            {
                                userSignin.response && userSignin.response.data.role === "ADMIN" &&
                                <div className="mb-3 col-md-3">
                                    <h5 className="form-label">Role</h5>
                                    <select className="form-select" onChange={(e)=>{setRole(e.target.value.toUpperCase())}}>
                                        <option selected>-- Select </option>
                                        <option >USER</option>
                                        <option >EMPLOYEE</option>
                                    </select>
                                    <h6 className="text-danger text-center">{roleError}</h6>
                                </div>
                                
                            }

                            { 
                                !userSignin.response && 
                                <div className="float-end">
                                    <br/> Already a User? <Link to="/signin">SignIn</Link>
                                </div>
                            }

                      
                       <div className="mb-3 float-start">
                                <button onClick={onSignUp} type="button" className="btn btn-success">SignUp</button>
                        </div>
              
                        </div>
                        <div className="col-md-3"></div>
                    </div>
            </div>
       </div>
       </div>
    )
};
export default SignUpScreen;
