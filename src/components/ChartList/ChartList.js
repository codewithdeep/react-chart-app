import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { fetchApi } from '../../data/api';

function ChartsList({ selectedType }) {
    const [chartData, updateChartData] = useState([])
    console.log("chartData",chartData);
    // console.log("updateChartData",updateChartData);
    useEffect(() => {
        fetchLaunchData()
    }, [selectedType])
    
    async function fetchLaunchData() {
        try {
          const request = await fetchApi()
          for (let i = 0; i < request.length; i++) {
          // console.log("request", request[i].Number);
          updateChartData(request);
        //   console.log("updateChartData",updateChartData);
        }
        } catch (error) {
          console.log(error);
        }
    }
    function renderBarChartData(barChartData) {
        return (
            <BarChart
                width={1000}
                height={500}
                data={barChartData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="number" fill="#FFC300" name="Value of Chart"/>
            </BarChart>
        )
    }
    function renderChartData( ) {
        if (chartData.length) {
            const chartGenData = chartData.map((item) => {
              console.log("itemType",item);
            //   return (item.Type === 'A' ?
            //     {'date': item.Date,
            //     'number': item.Number} : null
            //   )
            return {
                'date': item.Date,
                'number': item.Number
            }
        })
            return (
                <div>
                    {renderBarChartData(chartGenData)}
                </div>
            )
        }
    }
    return (
        <div>
            {renderChartData()}
        </div>
    );
}

export default ChartsList;