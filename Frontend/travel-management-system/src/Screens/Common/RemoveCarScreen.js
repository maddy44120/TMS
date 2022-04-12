import React, { cloneElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import axios from "axios";

const RemoveCarScreen = (props) => {
    const dispatch = useDispatch();
    const { loading, response, error } = useSelector((store) => store.carList);
    const url = "/TravelManagementSystem/user/car_list";
    const removeCarUrl = "/TravelManagementSystem/admin/deleteCar?carId=";


    function onDeleteCar(car) {
        console.log(`Removing car with id , ${car.c_id}`);

        axios.delete(removeCarUrl + car.c_id, header)
            .then((response) => {
                console.log("Car deleted!!");
                alert("Car : " + car.model_name + " with Plate number " + car.plate_number + " is successfully deleted now!!");
                
                console.log("repopulating carlist again..");
                
                axios.get(url, header)
                    .then((response) => {
                        setCarList([])
                        setCarList(response.data)
                    })
                    .catch((error) => {
                        alert(error.response.data.message)
                    })
            })
            .catch((error) => {
                alert(error.response.data.message)
            })




    }

    const header = {
        headers: {
            "Content-Type": "application/json",
        },
    };




    const [carList, setCarList] = useState([])

    useState(() => {
        axios.get(url, header)
            .then((response) => {
                setCarList([])
                setCarList(response.data)
            })
            .catch((error) => {
                alert(error.response.data.message)
            })

    }, [loading, response, error, dispatch, props.history])

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
                        <th scope="col">Delete Car</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        carList.map((car) => (
                            <tr>
                                <td>{car.c_id}</td>
                                <td>{car.model_name}</td>
                                <td>{car.plate_number}</td>
                                <td>{car.fuelType}</td>
                                <td>{car.capacity}</td>
                                <td>{car.price}</td>
                                <td>{car.status}</td>
                                <td><button onClick={() => onDeleteCar(car)} className="btn btn-outline-info">
                                    Delete Car
                                    </button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
};

export default RemoveCarScreen
