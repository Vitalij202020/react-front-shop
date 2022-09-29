import {errorHandler} from "../../utils/errorHandler";
import {IRoleCreate, RoleActions, RoleActionsTypes} from "../types/roleTypes";
import RolesService from "../../services/roleServices";
import {Dispatch} from "redux";

export const createRole = (body: IRoleCreate) => async (dispatch: Dispatch<RoleActions>) => {
    try {
        dispatch({type: RoleActionsTypes.ROLE_CREATE_REQUEST})
        const {data} = await RolesService.create(body)
        dispatch({type: RoleActionsTypes.ROLE_CREATE_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: RoleActionsTypes.ROLE_CREATE_FAIL, payload: errorHandler(error)})
    }
}