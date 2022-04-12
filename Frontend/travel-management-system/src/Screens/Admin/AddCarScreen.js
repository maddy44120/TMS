/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { createLogger } from "redux-logger";
import { addCar } from "../../Actions/AdminAction";
import Header from "../../Components/Header";

const AddCarScreen = (props) => {

    const [plate_number, setPlate_number] = useState("");
    const [model_name, setModel_name] = useState("");
    const [capacity, setCapacity] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [price, setPrice] = useState("");
    const [plate_numberError, setPlate_numberError] = useState("");
    const [model_nameError, setModel_nameError] = useState("");
    const [capacityError, setCapacityError] = useState("");
    const [fuelTypeError, setFuelTypeError] = useState("");
    const [priceError, setPriceError] = useState("");
    

    let navigate = useNavigate()
   
    const dispatch = useDispatch()

    
    const onAddCar = () => {

        console.log("ADDCAR: - Before vlidation");

        if((plate_number === ""))
            setPlate_numberError("Select a valid plate number");
            else
            setPlate_numberError("")


            if(plate_number && model_name && capacity && fuelType && price) {
        dispatch(addCar(plate_number,model_name,capacity,fuelType,price))}
        
    }

    const { loading, response, error } = useSelector(store => store.adminReducer)
    //SUCCESS/ERRO Redirection section
    useEffect(()=>{
        console.log("useEffect car");
        console.log(JSON.stringify(response));
        if(response && response.status === 200){

                console.log("Before action successful alert");
                alert("Action Successfull! car addedd successfully!!");
                console.log("After action successful alert");
                navigate("/admin-home")
                dispatch({
                    type : "ADD_CAR_SUCCES_RED",
                })
        }
},[loading,response,error,props.history])

    return (<div className="Screen">
        <div>
            <Header title="Add New Car" />
            {
                error && error.status === "error" && <h5 className="text-danger text-center">{error.message}</h5>
            }


            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Model Name</label>
                            <input required onChange={(e) => { setModel_name(e.target.value) }} type="text" className="form-control" placeholder="ModelName"></input>
                            <h6 className="text-danger text-center">{model_nameError}</h6>
                        </div>
                    </div>


                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Plate Number</label>
                            <input required onChange={(e) => { setPlate_number(e.target.value) }} type="text" className="form-control" placeholder="PlateNumber"></input>
                            <h6 className="text-danger text-center">{plate_numberError}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Fuel Type</label>
                            <input required onChange={(e) => { setFuelType(e.target.value) }} type="text" className="form-control" placeholder="FuelType"></input>
                            <h6 className="text-danger text-center">{fuelTypeError}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">Capcity</label>
                            <input required onChange={(e) => { setCapacity(e.target.value) }} type="text" className="form-control" placeholder="Capacity"></input>
                            <h6 className="text-danger text-center">{capacityError}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label className="form-label">price</label>
                            <input required onChange={(e) => { setPrice(e.target.value) }} type="text" className="form-control" placeholder="Price"></input>
                            <h6 className="text-danger text-center">{priceError}</h6>
                        </div>
                    </div>


                    <div className="mb-3 float-start">
                                <button onClick={onAddCar} type="button" className="btn btn-outline-primary">Add Car</button>
                        </div>
              
                        </div>
                        <div className="col-md-3"></div>
                    </div>
            </div>
       </div>
       );
}
export default AddCarScreen;