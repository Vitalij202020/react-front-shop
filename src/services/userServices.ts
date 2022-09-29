import $api from "../http";
import {IUserAddRole, IUserLogin, IUserRegister, IUserUpdate} from "../redux/types/userTypes";

export default class UserService {

    static login(body: IUserLogin) {
        return $api.post('/auth/login', body)
    }

    static registration(body: IUserRegister) {
        return $api.post('/auth/registration', body)
    }

    static update(body: IUserUpdate) {
        return $api.patch('/user', body);
    }

    static getFreshData() {
        return $api.get('/user/refresh');
    }

    static getAll() {
        return $api.get('/user');
    }

    static getOne(id: number) {
        return $api.get(`/user/${id}`);
    }

    static addRole(body: IUserAddRole) {
        return $api.post('/user/role', body)
    }
}