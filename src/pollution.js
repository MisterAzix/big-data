const TRAFIC_DATA_2018 = "../data/comptage_trafic_2018.json";
const TRAFIC_DATA_2019 = "../data/comptage_trafic_2019.json";
const TRAFIC_DATA_2020 = "../data/comptage_trafic_2020.json";
const TRAFIC_DATA_2021 = "../data/comptage_trafic_2021.json";

const NO2_DATA = [
    [26, 27, 20, 18, 15, 14, 13, 12, 20, 22, 28, 25],
    [26, 31, 20, 18, 13, 12, 12, 13, 20, 22, 23, 23],
    [26, 21, 14, 8, 9, 11, 9, 11, 17, 18, 24, 21],
    [19, 15, 17, 13, 10, 10, 8, 8, 17, 21, 18, 21],
];

const initPollution = async () => {
    const traficData2018 = await fetchJSON(TRAFIC_DATA_2018);
    const traficData2019 = await fetchJSON(TRAFIC_DATA_2019);
    const traficData2020 = await fetchJSON(TRAFIC_DATA_2020);
    const traficData2021 = await fetchJSON(TRAFIC_DATA_2021);

    const traficData = [traficData2018, traficData2019, traficData2020, traficData2021];

    const firstDataset = traficData.map((data) => {
        const filteredData = data.filter((item) => item?.fields?.nom_voie?.match(/^Bordeaux/gm));
        const newData = filteredData.filter((item) => item.fields.mjo_val > 0);
        const total = newData.map((item) => item.fields.mjo_val).reduce((prev, curr) => prev + curr, 0);
        return Math.round(total / newData.length) || 0;
    });

    const secondDataset = NO2_DATA.map((year) => {
        const total = year.reduce((prev, curr) => prev + curr, 0);
        return Math.round(total / year.length) || 0;
    });

    const labels = ["2017", "2018", "2019", "2020"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Moyenne du trafic journalier sur Bordeaux centre",
                data: firstDataset,
                borderColor: "#FF0000",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                yAxisID: "y",
            },
            {
                label: "Moyenne teneur en N02 en µg/m3 par an",
                data: secondDataset,
                borderColor: "#0000FF",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                yAxisID: "y1",
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
            plugins: {
                title: {
                    display: true,
                    text: "Chart.js Line Chart - Multi Axis",
                },
            },
            scales: {
                y: {
                    type: "linear",
                    display: true,
                    position: "left",
                },
                y1: {
                    type: "linear",
                    display: true,
                    position: "right",

                    grid: {
                        drawOnChartArea: false,
                    },
                },
            },
        },
    };

    const ctx = document.getElementById("chart_pollution_global");
    const pollutionChart = new Chart(ctx, config);
};

initPollution();
