import axios from 'axios'
import {
  USER_FEEDBACK_FAIL,
  USER_FEEDBACK_REQUEST,
  USER_FEEDBACK_SUCCESS,
} from '../Constants/UserConstants'
export const feedback = (u_email, message, rating) => {
  return (dispatch) => {
    dispatch({
      type: USER_FEEDBACK_REQUEST,
    })

    const url = '/TravelManagementSystem/user/feedback'

    const body = {
      u_email,
      message,
      rating,
    }

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_FEEDBACK_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_FEEDBACK_FAIL,
          payload: error.response.data,
        })
      })
  }
}
