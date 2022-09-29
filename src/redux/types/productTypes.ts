import {IUser} from "./userTypes";

export enum ProductActionsTypes {
    PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST',
    PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS',
    PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL',

    PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST',
    PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS',
    PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL',

    PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST',
    PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS',
    PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL',

    PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST',
    PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS',
    PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL',

    PRODUCT_LIST_DETAILS_REQUEST = 'PRODUCT_LIST_DETAILS_REQUEST',
    PRODUCT_LIST_DETAILS_SUCCESS = 'PRODUCT_LIST_DETAILS_SUCCESS',
    PRODUCT_LIST_DETAILS_FAIL = 'PRODUCT_LIST_DETAILS_FAIL',

    PRODUCT_CART_REQUEST = 'PRODUCT_CART_REQUEST',
    PRODUCT_CART_SUCCESS = 'PRODUCT_CART_SUCCESS',
    PRODUCT_CART_FAIL = 'PRODUCT_CART_FAIL',

    PRODUCT_FAVORITE_REQUEST = 'PRODUCT_FAVORITE_REQUEST',
    PRODUCT_FAVORITE_SUCCESS = 'PRODUCT_FAVORITE_SUCCESS',
    PRODUCT_FAVORITE_FAIL = 'PRODUCT_FAVORITE_FAIL',

    PRODUCT_LIKE_REQUEST = 'PRODUCT_LIKE_REQUEST',
    PRODUCT_LIKE_SUCCESS = 'PRODUCT_LIKE_SUCCESS',
    PRODUCT_LIKE_FAIL = 'PRODUCT_LIKE_FAIL',

    PRODUCT_CURRENT = 'PRODUCT_CURRENT',
    PRODUCT_RESET_FIELDS = 'PRODUCT_RESET_FIELDS',
    PRODUCT_FLAG_SWITCHER = 'PRODUCT_FLAG_SWITCHER',
}

export interface IProduct {
    id: number;
    name: string;
    desc: string;
    price: number;
}

export interface IProductWithDetails {
    id: number;
    name: string;
    desc: string;
    price: number;
    likes: IUser[];
    users: IUser[];
    inUserCart: IUser[];
}

export interface IProductCreate {
    name: string;
    desc: string;
    price: number;
}

export interface IProductUpdate {
    id: number;
    name: string;
    desc: string;
    price: number;
}

export interface IProductCreateState {
    loading: boolean;
    successProductCreate: boolean;
    errorProductCreate: string | null;
}

export interface IProductUpdateState {
    loading: boolean;
    successProductUpdate: boolean;
    errorProductUpdate: string | null;
}

export interface IProductDetailsState {
    loading: boolean;
    product: IProduct | null;
    error: string | null;
}

export interface IProductListState {
    loading: boolean;
    products: IProduct[];
    error: string | null;
}

export interface IProductListDetailsState {
    loading: boolean;
    products: IProductWithDetails[];
    error: string | null;
}

export interface IProductCommonState {
    loading: boolean;
    success: boolean;
    error: string | null;
}

export interface IProductCreateFlagState {
    flag: boolean;
}

export interface IProductCurrentState {
    currentProduct: IProductUpdate;
}

interface IProductCreateRequest {
    type: ProductActionsTypes.PRODUCT_CREATE_REQUEST;
}

interface IProductCreateSuccess {
    type: ProductActionsTypes.PRODUCT_CREATE_SUCCESS;
}

interface IProductCreateFail {
    type: ProductActionsTypes.PRODUCT_CREATE_FAIL;
    payload: string;
}

interface IProductUpdateRequest {
    type: ProductActionsTypes.PRODUCT_UPDATE_REQUEST;
}

interface IProductUpdateSuccess {
    type: ProductActionsTypes.PRODUCT_UPDATE_SUCCESS;
}

interface IProductUpdateFail {
    type: ProductActionsTypes.PRODUCT_UPDATE_FAIL;
    payload: string;
}

interface IProductDetailsRequest {
    type: ProductActionsTypes.PRODUCT_DETAILS_REQUEST;
}

interface IProductDetailsSuccess {
    type: ProductActionsTypes.PRODUCT_DETAILS_SUCCESS;
    payload: IProduct | null;
}

interface IProductDetailsFail {
    type: ProductActionsTypes.PRODUCT_DETAILS_FAIL;
    payload: string;
}

interface IProductListRequest {
    type: ProductActionsTypes.PRODUCT_LIST_REQUEST;
}

interface IProductListSuccess {
    type: ProductActionsTypes.PRODUCT_LIST_SUCCESS;
    payload: IProduct[];
}

interface IProductListFail {
    type: ProductActionsTypes.PRODUCT_LIST_FAIL;
    payload: string;
}

interface IProductListDetailsRequest {
    type: ProductActionsTypes.PRODUCT_LIST_DETAILS_REQUEST;
}

interface IProductListDetailsSuccess {
    type: ProductActionsTypes.PRODUCT_LIST_DETAILS_SUCCESS;
    payload: IProductWithDetails[];
}

interface IProductListDetailsFail {
    type: ProductActionsTypes.PRODUCT_LIST_DETAILS_FAIL;
    payload: string;
}

interface IProductCartRequest {
    type: ProductActionsTypes.PRODUCT_CART_REQUEST;
}

interface IProductCartSuccess {
    type: ProductActionsTypes.PRODUCT_CART_SUCCESS;
}

interface IProductCartFail {
    type: ProductActionsTypes.PRODUCT_CART_FAIL;
    payload: string;
}

interface IProductFavoriteRequest {
    type: ProductActionsTypes.PRODUCT_FAVORITE_REQUEST;
}

interface IProductFavoriteSuccess {
    type: ProductActionsTypes.PRODUCT_FAVORITE_SUCCESS;
}

interface IProductFavoriteFail {
    type: ProductActionsTypes.PRODUCT_FAVORITE_FAIL;
    payload: string;
}

interface IProductLikeRequest {
    type: ProductActionsTypes.PRODUCT_LIKE_REQUEST;
}

interface IProductLikeSuccess {
    type: ProductActionsTypes.PRODUCT_LIKE_SUCCESS;
}

interface IProductLikeFail {
    type: ProductActionsTypes.PRODUCT_LIKE_FAIL;
    payload: string;
}

interface IProductCurrent {
    type: ProductActionsTypes.PRODUCT_CURRENT;
    payload: IProductUpdate;
}

interface IProductResetFields {
    type: ProductActionsTypes.PRODUCT_RESET_FIELDS;
}

interface IProductFlagSwitcher {
    type: ProductActionsTypes.PRODUCT_FLAG_SWITCHER;
    payload: boolean;
}

export type ProductActions =
    IProductCreateRequest
    | IProductCreateSuccess
    | IProductCreateFail
    | IProductUpdateRequest
    | IProductUpdateSuccess
    | IProductUpdateFail
    | IProductDetailsRequest
    | IProductDetailsSuccess
    | IProductDetailsFail
    | IProductListRequest
    | IProductListSuccess
    | IProductListFail
    | IProductListDetailsRequest
    | IProductListDetailsSuccess
    | IProductListDetailsFail
    | IProductLikeRequest
    | IProductLikeSuccess
    | IProductLikeFail
    | IProductFavoriteRequest
    | IProductFavoriteSuccess
    | IProductFavoriteFail
    | IProductCartRequest
    | IProductCartSuccess
    | IProductCartFail
    | IProductCurrent
    | IProductResetFields
    | IProductFlagSwitcher