import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {
  SignInReducer,
  SignUpReducer,
  EditProfileReducer,
  FeedbackReducer,
  CancelBookingReducer,
  UserBookingReducer,
  FeedbackHistoryReducer,
  PaymentHistoryReducer
} from './Reducers/UserReducers'
import { AdminReducer } from './Reducers/AdminReducer'
import { CarListReducer } from './Reducers/CarReducer'

const reducers = combineReducers({
  userSignin: SignInReducer,
  userSignup: SignUpReducer,
  adminReducer: AdminReducer,
  carList: CarListReducer,
  editProfile: EditProfileReducer,
  feedback: FeedbackReducer,
  bookingList: UserBookingReducer,
  cancleBooking: CancelBookingReducer,
  feedbackHistory: FeedbackHistoryReducer,
  paymentHistory: PaymentHistoryReducer
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
