import {
    IProductCommonState, IProductCreateFlagState,
    IProductCreateState, IProductCurrentState,
    IProductDetailsState, IProductListDetailsState, IProductListState,
    IProductUpdateState,
    ProductActions,
    ProductActionsTypes
} from "../types/productTypes";

const initialProductCreateState: IProductCreateState = {
    loading: false,
    successProductCreate: false,
    errorProductCreate: null,
}

export const productCreateReducer = (state: IProductCreateState = initialProductCreateState, action: ProductActions): IProductCreateState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_CREATE_REQUEST:
            return { ...state, loading: true }
        case ProductActionsTypes.PRODUCT_CREATE_SUCCESS:
            return { ...state, loading: false, successProductCreate: true }
        case ProductActionsTypes.PRODUCT_CREATE_FAIL:
            return { ...state, loading: false, errorProductCreate: action.payload }
        case ProductActionsTypes.PRODUCT_RESET_FIELDS:
            return { loading: false, successProductCreate: false, errorProductCreate: null }
        default:
            return state
    }
}

const initialProductUpdateState: IProductUpdateState = {
    loading: false,
    successProductUpdate: false,
    errorProductUpdate: null,
}

export const productUpdateReducer = (state: IProductUpdateState = initialProductUpdateState, action: ProductActions): IProductUpdateState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_UPDATE_REQUEST:
            return { ...state, loading: true }
        case ProductActionsTypes.PRODUCT_UPDATE_SUCCESS:
            return { ...state, loading: false, successProductUpdate: true }
        case ProductActionsTypes.PRODUCT_UPDATE_FAIL:
            return { ...state, loading: false, errorProductUpdate: action.payload }
        case ProductActionsTypes.PRODUCT_RESET_FIELDS:
            return { loading: false, successProductUpdate: false, errorProductUpdate: null }
        default:
            return state
    }
}

const initialProductDetailsState: IProductDetailsState = {
    loading: false,
    product: null,
    error: null,
}

export const productDetailsReducer = (state: IProductDetailsState = initialProductDetailsState, action: ProductActions): IProductDetailsState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true }
        case ProductActionsTypes.PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload }
        case ProductActionsTypes.PRODUCT_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const initialProductListState: IProductListState = {
    loading: false,
    products: [],
    error: null,
}

export const productListReducer = (state: IProductListState = initialProductListState, action: ProductActions): IProductListState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_LIST_REQUEST:
            return { ...state, loading: true }
        case ProductActionsTypes.PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, products: action.payload }
        case ProductActionsTypes.PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const initialProductListDetailsState: IProductListDetailsState = {
    loading: false,
    products: [],
    error: null,
}

export const productListDetailsReducer = (state: IProductListDetailsState = initialProductListDetailsState, action: ProductActions): IProductListDetailsState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_LIST_DETAILS_REQUEST:
            return { ...state, loading: true }
        case ProductActionsTypes.PRODUCT_LIST_DETAILS_SUCCESS:
            return { ...state, loading: false, products: action.payload }
        case ProductActionsTypes.PRODUCT_LIST_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const initialProductLikeState: IProductCommonState = {
    loading: false,
    success: false,
    error: null,
}

export const productLikeReducer = (state: IProductCommonState = initialProductLikeState, action: ProductActions): IProductCommonState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_LIKE_REQUEST:
            return { ...state, loading: true }
        case ProductActionsTypes.PRODUCT_LIKE_SUCCESS:
            return { ...state, loading: false, success: true }
        case ProductActionsTypes.PRODUCT_LIKE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const initialProductFavoriteState: IProductCommonState = {
    loading: false,
    success: false,
    error: null,
}

export const productFavoriteReducer = (state: IProductCommonState = initialProductFavoriteState, action: ProductActions): IProductCommonState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_FAVORITE_REQUEST:
            return { ...state, loading: true }
        case ProductActionsTypes.PRODUCT_FAVORITE_SUCCESS:
            return { ...state, loading: false, success: true }
        case ProductActionsTypes.PRODUCT_FAVORITE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const initialProductCartState: IProductCommonState = {
    loading: false,
    success: false,
    error: null,
}

export const productCartReducer = (state: IProductCommonState = initialProductCartState, action: ProductActions): IProductCommonState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_CART_REQUEST:
            return { ...state, loading: true }
        case ProductActionsTypes.PRODUCT_CART_SUCCESS:
            return { ...state, loading: false, success: true }
        case ProductActionsTypes.PRODUCT_CART_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const initialProductCurrentState: IProductCurrentState = {
    currentProduct: {
        id: 0,
        name: '',
        desc: '',
        price: 0,
    }
}

export const productCurrentReducer = (state: IProductCurrentState = initialProductCurrentState, action: ProductActions): IProductCurrentState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_CURRENT:
            return { currentProduct: action.payload }
        default:
            return state
    }
}

const initialProductCreateFlagState: IProductCreateFlagState = {
    flag: true
}

export const productCreateFlagReducer = (state: IProductCreateFlagState = initialProductCreateFlagState, action: ProductActions): IProductCreateFlagState => {
    switch (action.type) {
        case ProductActionsTypes.PRODUCT_FLAG_SWITCHER:
            return { flag: action.payload }
        default:
            return state
    }
}