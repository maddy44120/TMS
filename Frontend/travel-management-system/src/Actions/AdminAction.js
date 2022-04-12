import axios from "axios";


    export const addCar = (plate_number,model_name,capacity,fuelType,price) => {
        return (dispatch) => {
          dispatch({
            type: "ADD_CAR_REQUEST",
          });
      
          const url = "http://localhost:8081/TravelManagementSystem/admin/addCar";
      
          const body = {plate_number,model_name,capacity,fuelType,price};
      
          const header = {
            headers: {
              "Content-Type": "application/json",
            },
          };
      
          axios
          .post(url, body, header)
            .then((response) => {
              dispatch({
                type: "ADD_CAR_SUCCESS",
                payload: response,
              });
            })
            .catch((error) => {
              dispatch({
                type: "ADD_CAR_FAIL",
                payload: error.response.data,
              });
            });
        };
      };
      
    
