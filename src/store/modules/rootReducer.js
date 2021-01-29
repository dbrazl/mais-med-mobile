import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import pharms from './pharms/reducer';

export default combineReducers({
    auth,
    user,
    pharms,
});
