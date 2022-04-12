import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createLogger } from "redux-logger";
import Header from "../../Components/Header";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const BookCarFormScreen = (props) => {
    const params = useParams()
    const location = useLocation()
    console.log(props)
    debugger
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("");
    const [start_time, setStart_time] = useState("");
    const [end_time, setEnd_time] = useState("");
    const [bookingData, setBookingData] = useState("");
    
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [start_datetimeError, setStart_datetimeError] = useState("");
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const userSignin = useSelector((store) => store.userSignin)

    const onBookCar = () => {
    
        const start_datetime = start_date + " " + start_time + ":00";
        const end_datetime = end_date + " " + end_time + ":00";

        console.log("Uid : " +  JSON.stringify(userSignin.response.data))
        console.log("CarId : " + JSON.stringify(location.state.carData))

        const uid =userSignin.response.data;
        const carid =location.state.carData;
        const url = "/TravelManagementSystem/user/book_car";
      
        const body = {start_datetime, end_datetime, source,  destination, uid, carid};
    


        
        const header = {
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        console.log(body);
        axios
        .post(url, body, header)
          .then((response) => {
            
            dispatch({
              type: "BOOK_CAR_SUCCESS",
              payload: response
             
            });
            setBookingData(response.data);

            console.log("Booking successfull.. letting user direct to payment!! with - " + bookingData);
           
            navigate('/payment-screen',
                { bookData: response.data,  carData: carid}
            );


          })
          .catch((error) => {
              console.log("Error while pushing booking " + error)
            dispatch({
              type: "BOOK_CAR_FAIL",
              payload: error.response.data,
            });
          });

         


      };
    
    


    return(

    <div className="Screen">
        <div>
            <Header title="Book Car Form" />
          

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Start Date</label>
                            <input required onChange={(e) => { setStart_date(e.target.value) }} type="date" className="form-control" placeholder="Start Date Time"></input>
                            <h6 className="text-danger text-center">{start_datetimeError}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Start Time</label>
                            <input required onChange={(e) => { setStart_time(e.target.value) }} type="time" className="form-control" placeholder="Start Date Time"></input>
                            <h6 className="text-danger text-center">{start_datetimeError}</h6>
                        </div>
                    </div>


                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">End date</label>
                            <input required onChange={(e) => { setEnd_date(e.target.value) }} type="date" className="form-control" placeholder="End date Time"></input>
                            <h6 className="text-danger text-center">{start_datetimeError}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">End Time</label>
                            <input required onChange={(e) => { setEnd_time(e.target.value) }} type="time" className="form-control" placeholder="Start Date Time"></input>
                            <h6 className="text-danger text-center">{start_datetimeError}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Source</label>
                            <input required onChange={(e) => { setSource(e.target.value) }} type="text" className="form-control" placeholder="Source"></input>
                            <h6 className="text-danger text-center">{start_datetimeError}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Destination</label>
                            <input required onChange={(e) => { setDestination(e.target.value) }} type="text" className="form-control" placeholder="Destination"></input>
                            <h6 className="text-danger text-center">{start_datetimeError}</h6>
                        </div>
                    </div>

                  
                    <div className="mb-3 float-start">
                                <button onClick={onBookCar} type="button" className="btn btn-outline-primary">Book This Car</button>
                        </div>
              
                        </div>
                        <div className="col-md-3"></div>
                    </div>
            </div>
       </div>)
}

export default BookCarFormScreen;