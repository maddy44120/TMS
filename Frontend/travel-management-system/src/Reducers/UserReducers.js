import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_RESET,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_RESET,
  USER_SIGNUP_SUCCESS,
  USER_EDIT_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_RESET,
  USER_EDIT_SUCCESS,
  USER_FEEDBACK_FAIL,
  USER_FEEDBACK_REQUEST,
  USER_FEEDBACK_RESET,
  USER_FEEDBACK_SUCCESS,
  CANCLE_BOOKING_REQUEST,
  CANCLE_BOOKING_SUCCESS,
  CANCLE_BOOKING_FAIL,
  CANCLE_BOOKING_RESET,
  USER_BOOKING_REQUEST,
  USER_BOOKING_SUCCESS,
  USER_BOOKING_FAIL,
  USER_BOOKING_RESET,
  FEEDBACK_HISTORY_REQUEST,
  FEEDBACK_HISTORY_SUCCESS,
  FEEDBACK_HISTORY_FAIL,
  FEEDBACK_HISTORY_RESET,
  PAYMENT_HISTORY_REQUEST,
  PAYMENT_HISTORY_SUCCESS,
  PAYMENT_HISTORY_FAIL,
  PAYMENT_HISTORY_RESET
} from '../Constants/UserConstants'

export const SignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNUP_RESET:
      return {}
    default:
      return state
  }
}

export const SignInReducer = (state = {}, action) => {
  debugger;
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNIN_RESET:
      return {}
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}

export const EditProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return { loading: true }
    case USER_EDIT_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_EDIT_FAIL:
      return { loading: false, error: action.payload }
    case USER_EDIT_RESET:
      return {}
    default:
      return state
  }
}

export const FeedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FEEDBACK_REQUEST:
      return { loading: true }
    case USER_FEEDBACK_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_FEEDBACK_FAIL:
      return { loading: false, error: action.payload }
    case USER_FEEDBACK_RESET:
      return {}
    default:
      return state
  }
}

export const CancelBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case CANCLE_BOOKING_REQUEST:
      return { loading: true }
    case CANCLE_BOOKING_SUCCESS:
      return { loading: false, response: action.payload }
    case CANCLE_BOOKING_FAIL:
      return { loading: false, error: action.payload }
    case CANCLE_BOOKING_RESET:
      return {}
    default:
      return state
  }
}
export const UserBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_BOOKING_REQUEST:
      return { loading: true }
    case USER_BOOKING_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_BOOKING_FAIL:
      return { loading: false, error: action.payload }
    case USER_BOOKING_RESET:
      return {}
    default:
      return state
  }
}

export const FeedbackHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK_HISTORY_REQUEST:
      return { loading: true }
    case FEEDBACK_HISTORY_SUCCESS:
      return { loading: false, response: action.payload }
    case FEEDBACK_HISTORY_FAIL:
      return { loading: false, error: action.payload }
    case FEEDBACK_HISTORY_RESET:
      return {}
    default:
      return state
  }
}

export const PaymentHistoryReducer = (state = {}, action) => {
      switch (action.type) {
        case PAYMENT_HISTORY_REQUEST:
          return { loading: true }
        case PAYMENT_HISTORY_SUCCESS:
          return { loading: false, response: action.payload }
        case PAYMENT_HISTORY_FAIL:
          return { loading: false, error: action.payload }
        case PAYMENT_HISTORY_RESET:
          return {}
        default:
          return state
      }
 };