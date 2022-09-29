import {
    IUserCommonState,
    IUserDetailsState,
    IUserListState,
    IUserLoginState,
    UserActions,
    UserActionsTypes
} from "../types/userTypes";


const initialUserRegisterState: IUserCommonState = {
    loading: false,
    success: false,
    error: null,
}

export const userRegisterReducer = (state = initialUserRegisterState, action: UserActions): IUserCommonState => {
    switch (action.type) {
        case UserActionsTypes.USER_REGISTER_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.USER_REGISTER_SUCCESS:
            return { ...state, loading: false, success: true,}
        case UserActionsTypes.USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionsTypes.USER_LOGOUT:
            return {
                loading: false,
                success: false,
                error: null,
            }
        default:
            return state
    }
}

const initialUserLoginState: IUserLoginState = {
    loading: false,
    userInfo: null,
    isAuth: false,
    error: null,
}

export const userLoginReducer = (state: IUserLoginState = initialUserLoginState, action: UserActions): IUserLoginState => {
    switch (action.type) {
        case UserActionsTypes.USER_LOGIN_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
                isAuth: true,
            }
        case UserActionsTypes.USER_LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload }
        case UserActionsTypes.USER_LOGOUT:
            return {
                loading: false,
                userInfo: null,
                isAuth: false,
                error: null,
            }
        default:
            return state
    }
}

const initialUserUpdateState: IUserCommonState = {
    loading: false,
    success: false,
    error: null,
}

export const userUpdateReducer = (state: IUserCommonState = initialUserUpdateState, action: UserActions): IUserCommonState => {
    switch (action.type) {
        case UserActionsTypes.USER_UPDATE_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.USER_UPDATE_SUCCESS:
            return { ...state, loading: false, success: true }
        case UserActionsTypes.USER_UPDATE_FAIL:
            return { ...state, loading: false, error: action.payload }
        case UserActionsTypes.USER_LOGOUT:
            return {
                loading: false,
                success: false,
                error: null,
            }
        default:
            return state
    }
}

const initialUserListState: IUserListState = {
    loading: false,
    users: [],
    error: null,
}

export const userListReducer = (state: IUserListState = initialUserListState, action: UserActions): IUserListState => {
    switch (action.type) {
        case UserActionsTypes.USER_LIST_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.USER_LIST_SUCCESS:
            return { ...state, loading: false, users: action.payload }
        case UserActionsTypes.USER_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const initialUserDetailsState: IUserDetailsState = {
    loading: false,
    user: null,
    error: null,
}

export const userDetailsReducer = (state = initialUserDetailsState, action: UserActions): IUserDetailsState => {
    switch (action.type) {
        case UserActionsTypes.USER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.USER_DETAILS_SUCCESS:
            return { ...state, loading: false, user: action.payload }
        case UserActionsTypes.USER_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const initialUserAddRoleState: IUserCommonState = {
    loading: false,
    success: false,
    error: null,
}

export const userAddRoleReducer = (state: IUserCommonState = initialUserAddRoleState, action: UserActions): IUserCommonState => {
    switch (action.type) {
        case UserActionsTypes.USER_ADD_ROLE_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.USER_ADD_ROLE_SUCCESS:
            return { ...state, loading: false, success: true }
        case UserActionsTypes.USER_ADD_ROLE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}