import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Components/Header'
import { feedback } from '../../Actions/FeedbackAction'
import { USER_FEEDBACK_RESET } from '../../Constants/UserConstants'
import { useNavigate } from 'react-router-dom'

const UserFeedback = (props) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState('')

  const { loading, response, error } = useSelector((store) => store.feedback)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFeedback = () => {
    if (email && message && rating) {
      console.log('After Validations')
      dispatch(feedback(email, message, rating))
    }
  }

  useEffect(() => {
    if (response && response.status === 200) {
      navigate('/signin')
      dispatch({
        type: USER_FEEDBACK_RESET,
      })
    }
  }, [loading, response, error])
  return (
    <div className="Screen">
      <div>
        <Header title="FeedBack" />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Email Id</label>
              <input
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="email"
                className="form-control"
                placeholder="abc@example.com"></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Rating in 1 to 5</label>
              <input
                required
                onChange={(e) => {
                  setRating(e.target.value)
                }}
                type="rating"
                className="form-control"
                placeholder="1 to 5"></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <input
                required
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="Message"></input>
            </div>

            <div className="mb-3 float-start">
              <button
                onClick={onFeedback}
                type="button"
                className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default UserFeedback
