import {combineReducers} from "redux";
import {
    userAddRoleReducer,
    userDetailsReducer,
    userListReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer
} from "./userReducers";
import {IUserCommonState, IUserDetailsState, IUserListState, IUserLoginState} from "../types/userTypes";
import {
    productCartReducer,
    productCreateFlagReducer,
    productCreateReducer,
    productCurrentReducer,
    productDetailsReducer,
    productFavoriteReducer,
    productLikeReducer,
    productListDetailsReducer,
    productListReducer,
    productUpdateReducer
} from "./productReducers";
import {
    IProductCommonState,
    IProductCreateFlagState,
    IProductCreateState,
    IProductCurrentState,
    IProductDetailsState,
    IProductListDetailsState,
    IProductListState,
    IProductUpdateState
} from "../types/productTypes";
import {roleCreateReducer} from "./roleReducers";
import {IRoleCreateState} from "../types/roleTypes";

export interface IAppState {
    userRegister: IUserCommonState;
    userLogin: IUserLoginState;
    userUpdate: IUserCommonState;
    userList: IUserListState;
    userDetails: IUserDetailsState;
    userAddRole: IUserCommonState;
    productCreate: IProductCreateState;
    productUpdate: IProductUpdateState;
    productCurrent: IProductCurrentState;
    productCreateFlag: IProductCreateFlagState;
    productDetails: IProductDetailsState;
    productList: IProductListState;
    productListDetails: IProductListDetailsState;
    productLike: IProductCommonState;
    productFavorite: IProductCommonState;
    productCart: IProductCommonState;
    roleCreate: IRoleCreateState;
}

export const rootReducer = combineReducers<IAppState>({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userDetails: userDetailsReducer,
    userAddRole: userAddRoleReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productCurrent: productCurrentReducer,
    productCreateFlag: productCreateFlagReducer,
    productDetails: productDetailsReducer,
    productList: productListReducer,
    productListDetails: productListDetailsReducer,
    productLike: productLikeReducer,
    productFavorite: productFavoriteReducer,
    productCart: productCartReducer,
    roleCreate: roleCreateReducer,
})

export type RootState = ReturnType<typeof rootReducer>