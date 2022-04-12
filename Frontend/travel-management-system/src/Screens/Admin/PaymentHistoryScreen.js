import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import axios from "axios";

const PaymentHistoryScreen = (props) => {
    const dispatch = useDispatch();
    const [paymentHistoryList,setPaymentHistoryList] = useState([]);
    const { loading, response, error } = useSelector((store) => store.paymentHistory);
    const url = "/TravelManagementSystem/admin/getPaymentHistory";
    
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
   
    useState(()=>{
        axios.get(url,header)
        .then((response)=>{
            console.log('in setPaymentHistoryList history screen'+JSON.stringify(response));
            setPaymentHistoryList([]);
            setPaymentHistoryList(response.data);
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
    },[loading, response, error, dispatch, props.history])

    return (
        <div>
        <Header title="Payment History" />
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">Payment Id</th>
              <th scope="col">Booking Id</th>
              <th scope="col">Car Id</th>
              <th scope="col">Amount</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Payment Status</th>
            </tr>
          </thead>
           <tbody>
            {
                paymentHistoryList.map((payment) =>(
                   <tr>
                     <td>{payment.payment_id}</td>
                    <td>{payment.book_id.booking_id}</td>
                    <td>{payment.carid.c_id}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.paymentMethod}</td>
                    <td>{payment.paymentStatus}</td>
                    
                   </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
};

export default PaymentHistoryScreen
