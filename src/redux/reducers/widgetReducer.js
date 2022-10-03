import {
    SET_TABLE_DATA, SET_CHART_DATA, SET_TYPES
} from '../actions/widgetsActions';
import initialState from './initialState';

const widgetsReducer = (state = initialState.widgets, { type, payload }) => {
    switch (type) {
        case SET_TABLE_DATA: {
            return {
                ...state,
                tableData: payload
            };
        }
        case SET_CHART_DATA: {
            return {
                ...state,
                chartData: payload
            };
        }
        case SET_TYPES: {
            return {
                ...state,
                types: payload
            };
        }
        default:
            return state;
    }
};

export default widgetsReducer;
