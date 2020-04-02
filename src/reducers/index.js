import { combineReducers } from 'redux';
import profileDataReducer from './profileDataReducer';
import profileImageReducer from './profileImageReducer';
import colorSelect1Reducer from './colorSelect1Reducer';
import colorSelect2Reducer from './colorSelect2Reducer';
import errorFormReducers from './errorFormReducers';

const allReducers = combineReducers({
    profileData: profileDataReducer,
    profileImage: profileImageReducer,
    colorSelect1: colorSelect1Reducer,
    colorSelect2: colorSelect2Reducer,
    errorForm: errorFormReducers,
});

export default allReducers;
