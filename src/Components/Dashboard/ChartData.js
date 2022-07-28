import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";

export default function ChartData({ type }) {
    const labels = ['March', 'April', 'May', 'June', 'Jan', 'Feb', 'Aug']
    const fees = [233, 433, 243, 234, 445, 534, 435]
    const data = {
        labels: labels,
        datasets: [
            {
                data: fees,
                backgroundColor: ['#00FFFF', '#FFC900', '#9700FF', '#FF8C00', '#009810', '#3118BB', '#D22727']
            }
        ]
    };
    Chart.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        ArcElement
    );
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "performance",
            },
        },
    };
    return (
        <div>
            {
                type === "dougnet" ? <Doughnut data={data} options={options} /> :
                    <Bar data={data} options={options} />

            }
        </div>
    )
}
