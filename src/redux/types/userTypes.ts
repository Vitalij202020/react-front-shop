import {IProduct} from "./productTypes";
import {IRole} from "./roleTypes";

export enum UserActionsTypes {
    USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',

    USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
    USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
    USER_REGISTER_FAIL = 'USER_REGISTER_FAIL',

    USER_LOGOUT = 'USER_LOGOUT',

    USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
    USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
    USER_UPDATE_FAIL = 'USER_UPDATE_FAIL',

    USER_LIST_REQUEST = 'USER_LIST_REQUEST',
    USER_LIST_SUCCESS = 'USER_LIST_SUCCESS',
    USER_LIST_FAIL = 'USER_LIST_FAIL',

    USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST',
    USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS',
    USER_DETAILS_FAIL = 'USER_DETAILS_FAIL',

    USER_ADD_ROLE_REQUEST = 'USER_ADD_ROLE_REQUEST',
    USER_ADD_ROLE_SUCCESS = 'USER_ADD_ROLE_SUCCESS',
    USER_ADD_ROLE_FAIL = 'USER_ADD_ROLE_FAIL',
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
}

export interface IUserWithDetails {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    productLikes: IProduct[];
    favorites: IProduct[];
    cart: IProduct[];
    roles: IRole[];
}

export interface IUserRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserUpdate {
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserAddRole {
    value: string;
    userId: number;
}

export interface IUserLoginState {
    loading: boolean,
    userInfo: IUserWithDetails | null,
    isAuth: boolean,
    error: string | null,
}

export interface IUserCommonState {
    loading: boolean,
    success: boolean,
    error: string | null,
}

export interface IUserListState {
    loading: boolean,
    users: IUserWithDetails[],
    error: string | null,
}

export interface IUserDetailsState {
    loading: boolean,
    user: IUser | null,
    error: string | null,
}

interface IUserRegisterRequest {
    type: UserActionsTypes.USER_REGISTER_REQUEST;
}

interface IUserRegisterSuccess {
    type: UserActionsTypes.USER_REGISTER_SUCCESS;
}

interface IUserRegisterFail {
    type: UserActionsTypes.USER_REGISTER_FAIL;
    payload: string;
}

interface IUserLoginRequest {
    type: UserActionsTypes.USER_LOGIN_REQUEST;
}

interface IUserLoginSuccess {
    type: UserActionsTypes.USER_LOGIN_SUCCESS;
    payload: IUserWithDetails;
}

interface IUserLoginFail {
    type: UserActionsTypes.USER_LOGIN_FAIL;
    payload: string;
}

interface IUserLogout {
    type: UserActionsTypes.USER_LOGOUT;
}

interface IUserUpdateRequest {
    type: UserActionsTypes.USER_UPDATE_REQUEST;
}

interface IUserUpdateSuccess {
    type: UserActionsTypes.USER_UPDATE_SUCCESS;
    payload: IUser;
}

interface IUserUpdateFail {
    type: UserActionsTypes.USER_UPDATE_FAIL;
    payload: string;
}

interface IUserListRequest {
    type: UserActionsTypes.USER_LIST_REQUEST;
}

interface IUserListSuccess {
    type: UserActionsTypes.USER_LIST_SUCCESS;
    payload: IUserWithDetails[];
}

interface IUserListFail {
    type: UserActionsTypes.USER_LIST_FAIL;
    payload: string;
}

interface IUserDetailsRequest {
    type: UserActionsTypes.USER_DETAILS_REQUEST;
}

interface IUserDetailsSuccess {
    type: UserActionsTypes.USER_DETAILS_SUCCESS;
    payload: IUser;
}

interface IUserDetailsFail {
    type: UserActionsTypes.USER_DETAILS_FAIL;
    payload: string;
}

interface IUserAddRoleRequest {
    type: UserActionsTypes.USER_ADD_ROLE_REQUEST;
}

interface IUserAddRoleSuccess {
    type: UserActionsTypes.USER_ADD_ROLE_SUCCESS;
    payload: IUser;
}

interface IUserAddRoleFail {
    type: UserActionsTypes.USER_ADD_ROLE_FAIL;
    payload: string;
}

export type UserActions =
    IUserRegisterRequest
    | IUserRegisterSuccess
    | IUserRegisterFail
    | IUserLoginRequest
    | IUserLoginSuccess
    | IUserLoginFail
    | IUserUpdateRequest
    | IUserUpdateSuccess
    | IUserUpdateFail
    | IUserLogout
    | IUserListRequest
    | IUserListSuccess
    | IUserListFail
    | IUserDetailsRequest
    | IUserDetailsSuccess
    | IUserDetailsFail
    | IUserAddRoleRequest
    | IUserAddRoleSuccess
    | IUserAddRoleFail
