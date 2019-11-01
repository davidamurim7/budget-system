import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

function Inicio() {

    const [dataBar, setDataBar] = useState(
        {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            datasets: [
                {
                    label: "Crescimento(%) ",
                    data: [12, 19, 3, 5, 2, 3, 30, 25, 35, 7 ,15, 10],
                    backgroundColor:"#2bbbad",
                    borderWidth: 2,
                    borderColor: []
                }
            ]
        }
    );

    const [barChartOptions, setBarChartOptions] = useState(
        {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    );

    return (
        <MDBContainer style={{height: '350px', overflow:'hidden'}}>
            {/* <h3 className="mt-5">Bar chart</h3> */}
            <Bar data={dataBar} options={barChartOptions} />
        </MDBContainer>
    );

}

export default Inicio;