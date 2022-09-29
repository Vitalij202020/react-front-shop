import {errorHandler} from "../../utils/errorHandler";
import ProductService from "../../services/productServices";
import {IProduct, IProductCreate, IProductUpdate, ProductActions, ProductActionsTypes} from "../types/productTypes";
import {Dispatch} from "redux";
import UserService from "../../services/userServices";
import {UserActions, UserActionsTypes} from "../types/userTypes";

export const createProduct = (body: IProductCreate) => async (dispatch: Dispatch<ProductActions>) => {
    try {
        dispatch({type: ProductActionsTypes.PRODUCT_CREATE_REQUEST})
        const {data} = await ProductService.create(body)
        const res = await ProductService.getAllWithDetails()
        dispatch({type: ProductActionsTypes.PRODUCT_CREATE_SUCCESS, payload: data})
        dispatch({type: ProductActionsTypes.PRODUCT_LIST_DETAILS_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type: ProductActionsTypes.PRODUCT_CREATE_FAIL, payload: errorHandler(error)})
    }
}

export const updateProduct = (body: IProductUpdate) => async (dispatch: Dispatch<ProductActions>) => {
    try {
        dispatch({type: ProductActionsTypes.PRODUCT_UPDATE_REQUEST})
        const {data} = await ProductService.update(body)
        const res = await ProductService.getAllWithDetails()
        dispatch({type: ProductActionsTypes.PRODUCT_UPDATE_SUCCESS, payload: data})
        dispatch({type: ProductActionsTypes.PRODUCT_LIST_DETAILS_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type: ProductActionsTypes.PRODUCT_UPDATE_FAIL, payload: errorHandler(error)})
    }
}

export const getOneProduct = (id: number) => async (dispatch: Dispatch<ProductActions>) => {
    try {
        dispatch({type: ProductActionsTypes.PRODUCT_DETAILS_REQUEST})
        const {data} = await ProductService.getOne(id)
        dispatch({type: ProductActionsTypes.PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ProductActionsTypes.PRODUCT_DETAILS_FAIL, payload: errorHandler(error)})
    }
}

export const getProductList = (indicator: string, param?: string) => async (dispatch: Dispatch<ProductActions>) => {
    try {
        dispatch({type: ProductActionsTypes.PRODUCT_LIST_REQUEST})
        const {data} = await ProductService.getAll(indicator, param)
        dispatch({type: ProductActionsTypes.PRODUCT_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ProductActionsTypes.PRODUCT_LIST_FAIL, payload: errorHandler(error)})
    }
}

export const getProductDetailsList = () => async (dispatch: Dispatch<ProductActions>) => {
    try {
        dispatch({type: ProductActionsTypes.PRODUCT_LIST_DETAILS_REQUEST})
        const {data} = await ProductService.getAllWithDetails()
        dispatch({type: ProductActionsTypes.PRODUCT_LIST_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ProductActionsTypes.PRODUCT_LIST_DETAILS_FAIL, payload: errorHandler(error)})
    }
}

export const productAddLike = (id: number) => async (dispatch: Dispatch<ProductActions | UserActions>) => {
    try {
        dispatch({type: ProductActionsTypes.PRODUCT_LIKE_REQUEST})
        const {data} = await ProductService.addLike(id)
        const freshUserData = await UserService.getFreshData()
        dispatch({type: UserActionsTypes.USER_LOGIN_SUCCESS, payload: freshUserData.data})
        dispatch({type: ProductActionsTypes.PRODUCT_LIKE_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ProductActionsTypes.PRODUCT_LIKE_FAIL, payload: errorHandler(error)})
    }
}

export const productAddToFavorite = (id: number) => async (dispatch: Dispatch<ProductActions | UserActions>) => {
    try {
        dispatch({type: ProductActionsTypes.PRODUCT_FAVORITE_REQUEST})
        const {data} = await ProductService.addToFavorite(id)
        const freshUserData = await UserService.getFreshData()
        dispatch({type: UserActionsTypes.USER_LOGIN_SUCCESS, payload: freshUserData.data})
        dispatch({type: ProductActionsTypes.PRODUCT_FAVORITE_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ProductActionsTypes.PRODUCT_FAVORITE_FAIL, payload: errorHandler(error)})
    }
}

export const productAddToCart = (id: number) => async (dispatch: Dispatch<ProductActions | UserActions>) => {
    try {
        dispatch({type: ProductActionsTypes.PRODUCT_CART_REQUEST})
        const {data} = await ProductService.addToCart(id)
        const freshUserData = await UserService.getFreshData()
        dispatch({type: UserActionsTypes.USER_LOGIN_SUCCESS, payload: freshUserData.data})
        dispatch({type: ProductActionsTypes.PRODUCT_CART_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ProductActionsTypes.PRODUCT_CART_FAIL, payload: errorHandler(error)})
    }
}

export const productAddToCurrent = (body: IProductCreate | IProductUpdate) => {
    return {type: ProductActionsTypes.PRODUCT_CURRENT, payload: body}
}

export const productFlagSwitcher = (flag: boolean) => {
    return {type: ProductActionsTypes.PRODUCT_FLAG_SWITCHER, payload: flag}
}

export const productClearFields = () => {
    return {type: ProductActionsTypes.PRODUCT_RESET_FIELDS}
}