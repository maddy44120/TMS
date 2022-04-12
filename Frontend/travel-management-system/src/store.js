import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
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

const initialState = {}
const middleWare = [thunk];
let store;

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

  store = createStore(reducers,initialState,
  compose(applyMiddleware(...middleWare)))


export default store;
