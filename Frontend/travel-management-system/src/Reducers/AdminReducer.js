export const AdminReducer = (state = {}, action) => {
   // alert("action is " + action.type);
    switch (action.type) {
      case "ADD_CAR_SUCCESS":
         // alert("ADD_CAR_SUCCES_ CASE")
        return { loading: true, response: action.payload};
      case "ADD_CAR_FAIL":
        return { loading: false, response: action.payload };
     
      default:
        return {loading: false};
    }
  };
  