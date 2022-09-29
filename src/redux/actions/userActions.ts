import UserService from "../../services/userServices";
import {errorHandler} from "../../utils/errorHandler";
import {IUserAddRole, IUserLogin, IUserRegister, IUserUpdate, UserActions, UserActionsTypes} from "../types/userTypes";
import {Dispatch} from "redux";

export const login = (body: IUserLogin) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_LOGIN_REQUEST})
        const {data} = await UserService.login(body)
        dispatch({type: UserActionsTypes.USER_LOGIN_SUCCESS, payload: data.user})
        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('userInfo', JSON.stringify(data.user))
    } catch (error) {
        dispatch({type: UserActionsTypes.USER_LOGIN_FAIL, payload: errorHandler(error)})
    }
}

export const register = (body: IUserRegister) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_REGISTER_REQUEST})
        const {data} = await UserService.registration(body)
        dispatch({type: UserActionsTypes.USER_REGISTER_SUCCESS})
        dispatch({type: UserActionsTypes.USER_LOGIN_SUCCESS, payload: data.user})
        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('userInfo', JSON.stringify(data.user))
    } catch (error) {
        dispatch({type: UserActionsTypes.USER_REGISTER_FAIL, payload: errorHandler(error)})
    }
}

export const logout = () => async (dispatch: Dispatch<UserActions>) => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    dispatch({type: UserActionsTypes.USER_LOGOUT})
}

export const updateUser = (body: IUserUpdate) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_UPDATE_REQUEST})
        const {data} = await UserService.update(body);
        dispatch({type: UserActionsTypes.USER_UPDATE_SUCCESS, payload: data})
        dispatch({type: UserActionsTypes.USER_LOGIN_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: UserActionsTypes.USER_UPDATE_FAIL, payload: errorHandler(error)})
    }
}

export const getAllUsers = () => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_LIST_REQUEST})
        const {data} = await UserService.getAll();
        dispatch({type: UserActionsTypes.USER_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: UserActionsTypes.USER_LIST_FAIL, payload: errorHandler(error)})
    }
}

export const getOneUser = (id: number) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_DETAILS_REQUEST})
        const {data} = await UserService.getOne(id);
        dispatch({type: UserActionsTypes.USER_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: UserActionsTypes.USER_DETAILS_FAIL, payload: errorHandler(error)})
    }
}

export const addUserRole = (body: IUserAddRole) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_ADD_ROLE_REQUEST})
        const {data} = await UserService.addRole(body)
        dispatch({type: UserActionsTypes.USER_ADD_ROLE_SUCCESS, payload: data.message})
    } catch (error) {
        dispatch({type: UserActionsTypes.USER_ADD_ROLE_FAIL, payload: errorHandler(error)})
    }
}