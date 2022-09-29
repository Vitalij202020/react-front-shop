import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

const token = localStorage.getItem('token')
const tokenFromLocalStorage = token ? JSON.parse(token) : null

const user = localStorage.getItem('userInfo')
const userFromLocalStorage = user ? JSON.parse(user) : null

const initialState = {
    userLogin: {
        userInfo: userFromLocalStorage,
        loading: false,
        error: null,
        isAuth: tokenFromLocalStorage ? true : false,
        token: tokenFromLocalStorage
    }
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store