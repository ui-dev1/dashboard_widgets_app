import { combineReducers } from 'redux';
import userReducer from './userReducer';
import widgetsReducer from './widgetReducer';

const rootReducer = () =>
    combineReducers({
        user: userReducer,
        widgets: widgetsReducer
    });

export default rootReducer;
