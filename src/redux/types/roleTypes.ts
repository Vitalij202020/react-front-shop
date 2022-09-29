export enum RoleActionsTypes {
    ROLE_CREATE_REQUEST = 'ROLE_CREATE_REQUEST',
    ROLE_CREATE_SUCCESS = 'ROLE_CREATE_SUCCESS',
    ROLE_CREATE_FAIL = 'ROLE_CREATE_FAIL',
}

export interface IRole {
    id: number;
    value: string;
}

export interface IRoleCreate {
    value: string;
    userId: number;
}

export interface IRoleCreateState {
    loading: boolean,
    success: boolean,
    error: string | null,
}

interface IProductCreateRequest {
    type: RoleActionsTypes.ROLE_CREATE_REQUEST;
}

interface IProductCreateSuccess {
    type: RoleActionsTypes.ROLE_CREATE_SUCCESS;
}

interface IProductCreateFail {
    type: RoleActionsTypes.ROLE_CREATE_FAIL;
    payload: string;
}

export type RoleActions =
    IProductCreateRequest
    | IProductCreateSuccess
    | IProductCreateFail