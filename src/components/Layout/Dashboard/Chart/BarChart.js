import React from 'react'
import { useSelector } from 'react-redux';
import Chart from '../../../shared/Chart/Chart';

const BarChart = () => {
    const { chartData } = useSelector((state) => state.widgets);

    return (
        <div>
            <Chart data={chartData} title="User Graph" type="column" />
        </div>
    )
}

export default BarChart