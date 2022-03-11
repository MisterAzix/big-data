const labels = ["2022", "2040"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Masse CO2 émise voitures polluantes (kg)",
            data: [136640138, 150645752],
            backgroundColor: ["rgba(0, 162, 255, 0.4)"],
            borderColor: ["rgba(0, 162, 255, 1)"],
            yAxisID: "y",
        },
        {
            label: "CO2 manquants pour arriver au CO2 emis",
            data: [917500, 150645752],
            backgroundColor: ["rgba(255, 100, 78, 0.4)"],
            borderColor: ["rgba(255, 100, 78, 1)"],
            yAxisID: "y",
        },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        stacked: false,
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
            },
            /* y1: {
                type: "linear",
                display: true,
                position: "right",

                grid: {
                    drawOnChartArea: false,
                },
            }, */
        },
    },
};

const ctxTree = document.getElementById("chart_tree");
const treeChart = new Chart(ctxTree, config);
