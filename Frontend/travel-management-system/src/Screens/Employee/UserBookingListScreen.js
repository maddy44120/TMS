import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import axios from "axios";

const UserBookingListScreen = (props) => {
    const dispatch = useDispatch();
    const { loading, response, error } = useSelector((store) => store.bookingList);
    const url = "/TravelManagementSystem/emp/booking_list";
    
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const [bookingList,setBookingList] = useState([]);
    useState(()=>{
      console.log('in employee booking list');
        axios.get(url,header)
        .then((response)=>{
            console.log('in Booking list screen'+JSON.stringify(response));
           setBookingList([]);
           setBookingList(response.data);
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
    },[loading, response, error, dispatch, props.history])

    return (
        <div>
        <Header title="User Booking List" />
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">Booking Id</th>
              <th scope="col">Source</th>
              <th scope="col">Destination</th>
              <th scope="col">Start DateTime</th>
              <th scope="col">End DateTime</th>
              <th scope="col">User Id</th>
              <th scope="col">Car Id</th>
            </tr>
          </thead>
          <tbody>
            {
              bookingList.map((booking) =>(
                   <tr>
                     <td>{booking.booking_id}</td>
                    <td>{booking.source}</td>
                    <td>{booking.destination}</td>
                    <td>{booking.start_datetime}</td>
                    <td>{booking.end_datetime}</td>
                    <td>{booking.user_id}</td>
                    <td>{booking.car_id}</td>
                   </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
};

export default UserBookingListScreen
