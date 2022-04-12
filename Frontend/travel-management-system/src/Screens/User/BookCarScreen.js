import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BookCarScreen = (props) => {
    const dispatch = useDispatch();
    const { loading, response, error } = useSelector((store) => store.carList);
    const url = "/TravelManagementSystem/user/car_list";
    
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const navigate = useNavigate()

    // function onBookCar(car) {
    //   debugger
    //     console.log(`Booking car with id , ${car.c_id}`);

    //     navigate('/book-car-form', { carData: car });
    // }

     const [carList,setCarList] = useState([])
         
    useState(()=>{
        axios.get(url,header)
        .then((response)=>{
           setCarList([])
           setCarList(response.data) 
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })

    },[loading, response, error, dispatch, props.history])

    return (
        <div>
        <Header title="Car Details" />
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">Car Id</th>
              <th scope="col">Model Name</th>
              <th scope="col">Plate Number</th>
              <th scope="col">Fuel Type</th>
              <th scope="col">Capacity</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Book</th>
            </tr>
          </thead>
          <tbody>
            
            {
              carList.map((car) =>(
                   <tr>
                    <td>{car.c_id}</td>
                    <td>{car.model_name}</td>
                    <td>{car.plate_number}</td>
                    <td>{car.fuelType}</td>
                    <td>{car.capacity}</td>
                    <td>{car.price}</td>
                    <td>{car.status}</td>
                    <td>
                    {
                     car.status==='AVAILABLE' && 
                     <Link
                      to={{
                        pathname: '/book-car-form'
                      }}
                      state={{ carData: car }}
                      className="btn btn-outline-info"
                     >
                      Book This Car
                     </Link>
                    }
                   </td>
                   </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
};

export default BookCarScreen;
