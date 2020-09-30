import React, { useEffect } from 'react';
import Chart from 'chart.js/dist/Chart';

export const Graph = (props) => {

    useEffect(() => {
        const ctx = document.getElementById('chart' + props.index);
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: props.labels,
                datasets: [{
                    data: props.data,
                    backgroundColor: 'rgba(186, 0, 105, 0.2)',
                    borderColor: 'rgba(186, 0, 105, 1)',
                    borderWidth: 3,
                    label: 'weather in ' + props.units
                }],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'rgba(186, 0, 105, 1)',
                            fontStyle: 'bold',
                            fontSize: 12
                        },
                        gridLines: {
                            color: 'rgba(186, 0, 105, 0.2)',
                            linewidth: 1
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            color: 'rgba(255, 255, 255, 0)',
                            linewidth: 1
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'rgba(186, 0, 105, 1)',
                            fontSize: 12,
                            fontStyle: 'bold'
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'rgba(186, 0, 105, 1)',
                        fontStyle: 'bold'
                    }
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }
        });
    });

    return (
        <canvas id={'chart' + props.index}></canvas>
    );
}