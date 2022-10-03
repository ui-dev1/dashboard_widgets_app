import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chartData } from '../../../json/chartData';
import { tableData } from '../../../json/tableData';
import {
  setChartData,
  setTableData,
} from '../../../redux/actions/widgetsActions';
import BarChart from './Chart/BarChart';
import UserTable from './Table/UserTable';

const Dashboard = () => {
  const { types } = useSelector((state) => state.widgets);
  const dispatch = useDispatch();

  const widgetTypes = types.map((item) => item.url);
  useEffect(() => {
    if (widgetTypes.includes('chartData')) {
      dispatch(setChartData(chartData));
    }
    if (widgetTypes.includes('tableData')) {
      dispatch(setTableData(tableData));
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
