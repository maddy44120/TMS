import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import axios from "axios";

const FeedbackHistoryScreen = (props) => {
    const dispatch = useDispatch();
    const [feedbackHistoryList,setFeedbackHistoryList] = useState([]);
    const { loading, response, error } = useSelector((store) => store.feedbackHistory);
    const url = "/TravelManagementSystem/admin/feedback_list";
    
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
   
    useState(()=>{
        console.log('in feedback');
        axios.get(url,header)
        .then((response)=>{
            console.log('in feedback history screen'+JSON.stringify(response));
           setFeedbackHistoryList([]);
           setFeedbackHistoryList(response.data);
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
    },[loading, response, error, dispatch, props.history])

    return (
        <div>
        <Header title="Feedback/Rating History" />
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">Feedback Id</th>
              <th scope="col">User Email Id</th>
              <th scope="col">Rating</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {
                feedbackHistoryList.map((feedback) =>(
                   <tr>
                     <td>{feedback.f_id}</td>
                    <td>{feedback.u_email}</td>
                    <td>{feedback.rating}</td>
                    <td>{feedback.message}</td>
                   </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
};

export default FeedbackHistoryScreen
