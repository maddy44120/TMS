import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProfile, signout } from "../../Actions/UserActions";
import Header from "../../Components/Header";
import { USER_EDIT_RESET } from "../../Constants/UserConstants";

const EditProfileScreen = (props) => {
    const userSignin = useSelector(store => store.userSignin)
    let {u_id,name,password,mobile_no} = userSignin.response.data

    let [name_o,setName] = useState(""+ name);
    let [password_o,setPassword] = useState(""+password);
    let [mobile_no_o,setMobile_no] = useState(""+mobile_no);

    const [nameError,setNameError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [mobile_noError,setMobile_noError] = useState("");

    const {loading,response,error} = useSelector(store => store.editProfile)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const onEditProfile = () => { 
        if(name.length<1)
            setNameError("Name is required")
        else
        setNameError("")

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
        if(name && password && mobile_no){
            console.log(u_id+" "+name_o+" "+password_o+" "+mobile_no_o)
        dispatch(editProfile(u_id,name_o,password_o,mobile_no_o))
        }
    }
    useEffect(()=>{
        console.log('main user'+JSON.stringify(response));
        if(response && response.status === 200){
            dispatch({
                    type : USER_EDIT_RESET,
            })
            dispatch(signout())
            alert('Profile Updated Successfully !!! Logging out for saving changes')
           navigate("/signin");
        }
},[loading, response, error, dispatch, props.history])
return (
    <div className="Screen">
            <div>
                <Header title="Edit Profile"/>
                {
                    error && error.status === "error" && <h5 className="text-danger text-center">{error.message}</h5>
                }
                <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6"></div>
                   <div className="row">
                        <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input defaultValue={name_o}  onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"  placeholder="Name"></input>
                                <h6 className="text-danger text-center">{nameError}</h6>
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input defaultValue={password_o} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"  placeholder="********"></input>
                                <h6 className="text-danger text-center">{passwordError}</h6>
                        </div>   
                        <div className="mb-3">
                                <label className="form-label">Mobile Number</label>
                                <input defaultValue={mobile_no_o}  onChange={(e)=>{setMobile_no(e.target.value)}} type="mobile_no" className="form-control"  placeholder="+91"></input>
                                <h6 className="text-danger text-center">{mobile_noError}</h6>
                        </div>   
                   <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <div className="mb-3 float-start">
                                <button onClick={onEditProfile} type="button" className="btn btn-success">Edit Profile</button>
                    </div>
              
                    </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
};

export default EditProfileScreen;

