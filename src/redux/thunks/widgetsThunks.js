import { setChartData, setTableData, setTypes } from '../actions/widgetsActions';
import { getDashboardDataService, getWidgetsTypeService } from '../service';

export const fetchWidgetsType = () => {
    return async (dispatch, getState) => {
        try {
            const response = await getWidgetsTypeService(getState().user.role);
            dispatch(setTypes(response.data));
        } catch (error) {
            dispatch(setTypes([]));
        }
    };
};

export const fetchChartData = () => {
    return async (dispatch) => {
        try {
            const response = await getDashboardDataService('chartData');
            dispatch(setChartData(response.data.chartData));
        } catch (error) {
            dispatch(setChartData([]));
        }
    };
};

export const fetchTableData = () => {
    return async (dispatch) => {
        try {
            const response = await getDashboardDataService('tableData');
            dispatch(setTableData(response.data.tableData));
        } catch (error) {
            dispatch(setTableData([]));
        }
    };
};