import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelCarBooking} from "../../Actions/UserActions";
import Header from "../../Components/Header";
import { CANCLE_BOOKING_RESET } from "../../Constants/UserConstants";
import axios from "axios";

const CancelBookingScreen = (props) => {
    const userSignin = useSelector(store => store.userSignin)
    let {u_id} = userSignin.response.data;
    const dispatch = useDispatch();
    const { loading, response, error } = useSelector((store) => store.cancleBooking);
    const url = "/TravelManagementSystem/user/user-booking";
    
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      params: { userID: u_id }
    };
    const [userBookingList,setUserBookingList] = useState([]);

    useState(()=>{
        axios.get(url,header)
        .then((response)=>{
            console.log('in Booking list screen'+JSON.stringify(response));
            setUserBookingList([]);
            setUserBookingList(response.data);
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
    },[loading, response, error, dispatch, props.history])

    const onCancelBooking = (booking_id) => { 
        console.log('booking_id in cancel'+booking_id);
        dispatch(cancelCarBooking(booking_id))
        
    }
    useEffect(()=>{
        console.log('main user'+JSON.stringify(response));
        if(response && response.status === 200){
            dispatch({
                    type : CANCLE_BOOKING_RESET,
            })
            alert('Booking Cancel Successfully!!!');
            axios.get(url,header)
          .then((response1)=>{
               setUserBookingList([]);
              setUserBookingList(response1.data);
          })
          .catch((error)=>{
              alert(error.response.data.message)
          })
        }
})
return (
    <div>
    <Header title="My Booking List" />
    <table class="table caption-top">
      <thead>
        <tr>
          <th scope="col">Booking Id</th>
          <th scope="col">Source</th>
          <th scope="col">Destination</th>
          <th scope="col">Start DateTime</th>
          <th scope="col">End DateTime</th>
          <th scope="col">Booking Status</th>
 

          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          userBookingList.map((booking) =>(
               <tr>
                 <td>{booking.booking_id}</td>
                <td>{booking.source}</td>
                <td>{booking.destination}</td>
                <td>{booking.start_datetime}</td>
                <td>{booking.end_datetime}</td>
                <td>{booking.booking_status}</td>
                { booking.booking_status === 'CANCEL' ? <td>Booking ALREADY CANCELLED</td>
                
                 : <td>
                   <button className="btn btn-success" onClick={() => onCancelBooking(booking.booking_id)}> Cancel Booking</button>
                   </td>
                   
                }
               </tr>
          ))}
      </tbody>
    </table>
  </div>
    )
};

export default CancelBookingScreen;

