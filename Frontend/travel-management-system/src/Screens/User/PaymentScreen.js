import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Header from "../../Components/Header";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const PaymentFormScreen = (props) => {
    debugger
    const location = useLocation()
    const [amount, setamount] = useState(10000);
    const [paymentMethod, setpaymentMethod] = useState("");
    const [paymentStatus, setpaymentStatus] = useState(""); 
    const [paymentMethodError, setpaymentMethodError] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userSignin = useSelector((store) => store.userSignin)

    const [book_id,setBook_id] = useState([]);
    const [carid,setCarid] = useState([]);
    useState(()=>{
      console.log('location',location)
        
         //setBook_id(location.state.bookData);
         //setCarid(location.state.carData)
        console.log("userSignin Data  "+userSignin);
        //Calculate Amount
        var startTime = location && location.state !== null ? new Date(location.state.bookData.start_datetime) : new Date();   //firstDate
        var endTime = location && location.state !== null ? new Date(location.state.bookData.end_datetime)  : new Date();//SecondDate
     
        var diff = (endTime-startTime); 
        var days = (diff/(1000*60*60*24));
var price = location && location.state !== null ? location.state.carData.price : 1000;
        
        setamount(price * days);
        
    });
    
    
    const onPaymentInitiation = () => {
        const url = "/TravelManagementSystem/user/payment";
        const body = {amount,paymentMethod,paymentStatus,book_id,carid};
    
        const header = {
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        axios
        .post(url, body, header)
          .then((response) => {
            dispatch({
              type: "PAYMENT_SUCCESS",
              payload: response,
            });

            alert("Thanks, your booking and Payment is intiated, redirecting to Manage Booking to  check  status.")
            navigate("/manage-booking")
          })
          .catch((error) => {
            dispatch({
              type: "PAYMENT_FAIL",
              payload: error.response.data,
            });
          });
      };
    
    


    return(

    <div className="Screen">
        <div>
            <Header title="Payment Screen" />
          
            <div>
        
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">Booking Id</th>
              <th scope="col">Car Model</th>
              <th scope="col">Car Plate Number</th>
              <th scope="col">Start Date Time</th>
              <th scope="col">End Date Time</th>
              <th scope="col">Source</th>
              <th scope="col">Destination</th>
              <th scope="col">Amount to  be Paid</th>
              
            </tr>
          </thead>
          <tbody> 
                   <tr>
                    <td>{book_id.booking_id}</td>
                    <td>{carid.model_name}</td>
                    <td>{carid.plate_number}</td>
                    <td>{book_id.start_datetime}</td>
                    <td>{book_id.end_datetime}</td>
                    <td>{book_id.source}</td>
                    <td>{book_id.destination}</td>
                    <td>{amount}</td>
                    
                   </tr>
              
          </tbody>
        </table>
      </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">

                    
                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Payment Method</label>
                            
                            <select className="form-select" onChange={(e)=>{setpaymentMethod(e.target.value.toUpperCase())}}>
                                        <option disabled selected>-- Select </option>
                                        <option >DEBIT_CARD</option>
                                        <option >NETBANKING</option>
                                        <option >UPI</option>
                                    </select>

                            <h6 className="text-danger text-center">{paymentMethodError}</h6>
                        </div>
                    </div>


                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Payment Status</label>
                            <select className="form-select" onChange={(e)=>{setpaymentStatus(e.target.value.toUpperCase())}}>
                                        <option disabled selected>-- Select </option>
                                        <option >SUCCESS</option>
                                        <option >FAILED</option>
                                    </select>

                            <h6 className="text-danger text-center">{paymentMethodError}</h6>
                        </div>
                    </div>

               
                  
                    <div className="mb-3 float-start">
                                <button onClick={onPaymentInitiation} type="button" className="btn btn-outline-primary">Initiate Payment</button>
                        </div>
              
                        </div>
                        <div className="col-md-3"></div>
                    </div>
            </div>
       </div>)
}

export default PaymentFormScreen;