const ctxComparison = document.getElementById('chart_vehicules_global');
const comparisonChart = new Chart(ctxComparison, {
    type: 'bar',
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Véhicules motorisés (%)',
            data: [98.52, 99.1, 99.32, 98.7, 95.78, 97.8, 97.9, 100, 94.69, 89.22, 86.83, 86.97],
            backgroundColor: ['rgba(255, 99, 132, 0.4)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        },{
            label: 'Vélos (%)',
            data: [48.89, 51.11, 55.56, 57.78, 61.11, 68.89, 75.56, 83.33, 93.33, 100, 86.67],
            backgroundColor: ['rgba(75, 192, 192, 0.4)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxVehicules = document.getElementById('chart_vehicules_peak');
const vehiculesChart = new Chart(ctxVehicules, {
    type: 'bar',
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Nombre moyen par année de véhicules motorisés aux heures de pointe',
            data: [297995, 299731, 300391.91, 298537, 289690, 295817, 296113, 302460, 286400, 269852, 262633, 263065],
            backgroundColor: ['rgba(245, 157, 85, 0.4)'],
            borderColor: ['rgba(245, 157, 85, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxBike = document.getElementById('chart_vehicules_bike');
const bikeChart = new Chart(ctxBike, {
    type: 'bar',
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Nombre moyen par année de vélos (base 100 en 2001)',
            data: [220, 230, 250, 260, 275, 280, 310, 340, 375, 420, 450, 390],
            backgroundColor: ['rgba(270, 223, 50, 0.4)'],
            borderColor: ['rgba(270, 223, 50, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});