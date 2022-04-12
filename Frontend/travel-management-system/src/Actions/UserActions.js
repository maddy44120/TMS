import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_EDIT_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  CANCLE_BOOKING_REQUEST,
  CANCLE_BOOKING_SUCCESS,
  CANCLE_BOOKING_FAIL
  } from "../Constants/UserConstants";
  import axios from "axios";

  export const signup = (name,email,password,mobile_no,aadhar_card,license_no,dob,role) => {
    return (dispatch) => {
      dispatch({
        type: USER_SIGNUP_REQUEST,
      });
  
      const url = "/TravelManagementSystem/user/signup";
  
      const body = {name,email,password,mobile_no,aadhar_card,license_no,dob,role};
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      axios
      .post(url, body, header)
        .then((response) => {
          dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          console.log('error', error)
          dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data,
          });
        });
    };
  };
  

  export const signin = (email, password) => {
    debugger;
    return (dispatch) => {
      dispatch({
        type: USER_SIGNIN_REQUEST,
      });
  
      const url = "/TravelManagementSystem/user/login";
  
      const body = { email, password };
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      axios
        .post(url, body, header)
        .then((response) => {
          console.log("response "+response);
          dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: response,
          });
        }).catch((error) => {
          console.log("ERROR"+error);
          dispatch({ 
            type: USER_SIGNIN_FAIL,
            payload: error.response.data,
          });
        });
    };
  };
  
   export const editProfile = (u_id,name,password,mobile_no) => {
    return (dispatch) => {
       dispatch({
        type: USER_EDIT_REQUEST,
      });
      const header = {
        headers: {
          "Content-Type": "application/json",
          "Authorization" : sessionStorage.getItem("Authorization")
        },
        params: { uid: u_id }
      };
      const body = {name,password,mobile_no};
      const url ="/TravelManagementSystem/user/edit_profile";
      
      axios.put(url ,body,header)
        .then((response) => {
          dispatch({
            type: USER_EDIT_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          dispatch({
            type: USER_EDIT_FAIL,
            payload: error.response.data,
          });
        });
    };
  };


  export const cancelCarBooking = (booking_id) => {
    return (dispatch) => {
       dispatch({
        type: CANCLE_BOOKING_REQUEST,
      });
      const header = {
        headers: {
          "Content-Type": "application/json"
          },
        params: { book_Id: booking_id }
      };
      const url ="/TravelManagementSystem/user/cancel_booking";
      
      axios.delete(url,header)
        .then((response) => {
          console.log('cancel booking'+JSON.stringify(response));
          dispatch({
            type: CANCLE_BOOKING_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          console.log('cancel booking'+JSON.stringify(error));
          dispatch({
            type: CANCLE_BOOKING_FAIL,
            payload: error.response.data,
          });
        });
    };
  };
  
  export const signout = () => {
    sessionStorage.removeItem("Authorization");
    return (dispatch) => {
      dispatch({
        type: USER_SIGNOUT,
      });
    };
  };
  
