import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { colors } from '../constants/colors';

const Chart = ({ data, title, type }) => {

    return (
        <HighchartsReact
            highcharts={Highcharts} options={{
                series: [
                    ...data.map(item => ({ name: item.name, data: [...item.data] }))

                ],
                credits: {
                    enabled: false
                },
                chart: {
                    type: type
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Values:'
                    },
                },
                title: {
                    text: title,
                    align: 'left',
                    style: {
                        color: colors.black,
                        fontWeight: 'bolder'
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                    }
                }
            }} />
    )
}

export default Chart