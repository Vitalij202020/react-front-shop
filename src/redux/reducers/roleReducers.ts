import {IRoleCreateState, RoleActions, RoleActionsTypes} from "../types/roleTypes";

const initialRoleCreateState: IRoleCreateState = {
    loading: false,
    success: false,
    error: null,
}

export const roleCreateReducer = (state: IRoleCreateState = initialRoleCreateState, action: RoleActions): IRoleCreateState => {
    switch (action.type) {
        case RoleActionsTypes.ROLE_CREATE_REQUEST:
            return { ...state, loading: true }
        case RoleActionsTypes.ROLE_CREATE_SUCCESS:
            return { ...state, loading: false, success: true }
        case RoleActionsTypes.ROLE_CREATE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}