import $api from "../http";
import {IRoleCreate} from "../redux/types/roleTypes";

export default class RolesService {
    static create(body: IRoleCreate) {
        return $api.post('/role', body)
    }
}