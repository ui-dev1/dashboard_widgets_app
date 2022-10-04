import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchChartData,
  fetchTableData,
} from '../../../redux/thunks/widgetsThunks';
import BarChart from './Chart/BarChart';
import UserTable from './Table/UserTable';

const Dashboard = () => {
  const { types } = useSelector((state) => state.widgets);
  const dispatch = useDispatch();

  const widgetTypes = types.map((item) => item.url);
  useEffect(() => {
    if (widgetTypes.includes('chartData')) {
      dispatch(fetchChartData());
    }
    if (widgetTypes.includes('tableData')) {
      dispatch(fetchTableData());
    }
  }, [types]);
  return (
    <div className='dashboard-flex'>
      {widgetTypes.includes('chartData') && <BarChart />}
      <UserTable />
    </div>
  );
};

export default Dashboard;
