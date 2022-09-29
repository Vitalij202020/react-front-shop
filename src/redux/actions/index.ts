import * as UserActionCreators from './userActions';
import * as ProductActionCreators from './productActions';
// import * as RoleActionCreators from './roleActions';

export default {
    ...UserActionCreators,
    ...ProductActionCreators,
    // ...RoleActionCreators,
}