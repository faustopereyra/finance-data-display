import React, { useRef, useState, useEffect } from "react";

import Chartjs from "chart.js"

import "./chart.style.scss"

// Note: Due to time constrains I desided to go with chart.js for displaing the market data
//You may find an implementation using D3.js on the d3chart.js file.

const Chart = (props) => {

    //Deconstruct data
    const dates = props.data.map(date => date.date)
    const prices = props.data.map(price => price.price)

    //Configure chart
    const chartConfig = {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: 'Price',
                data: prices,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            }
        },


    }


    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        //Make a new chart on render
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer, props]);


    return (
        <div className="chart__container">
            <canvas className="chart" ref={chartContainer} />
        </div >
    )
}

export default Chart