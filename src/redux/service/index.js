import axios from '../../utils/axios';

export const getWidgetsTypeService = (role) => axios.get(`/get-widgets/role/${role}`);
export const getDashboardDataService = (url) => axios.get(`/${url}`);
