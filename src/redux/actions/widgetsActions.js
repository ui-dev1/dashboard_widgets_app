export const SET_TABLE_DATA = `SET_TABLE_DATA`;
export const SET_CHART_DATA = `SET_CHART_DATA`;
export const SET_TYPES = 'SET_TYPES';

export function setTableData(payload) {
    return {
        type: SET_TABLE_DATA,
        payload
    };
}

export function setChartData(payload) {
    return {
        type: SET_CHART_DATA,
        payload
    };
}

export function setTypes(payload) {
    return {
        type: SET_TYPES,
        payload
    };
}