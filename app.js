const labels = Array.from({ length: 20 }, (_, i) => i + 1); // X-axis labels (overs)

const indiaData = {
    label: 'India',
    data: [5, 14, 19, 20, 27, 33, 38, 40, 43, 47, 52, 59, 65, 72, 75, 80, 89, 90, 97, 100],
    borderColor: 'rgba(255, 99, 132, 1)',
    fill: false,
};

const pakistanData = {
    label: 'Pakistan',
    data: [ 2,6, 12, 15, 21, 25, 27, 35, 40, 42, 50, 57, 60, 64, 70, 78, 82, 85, 90, 95],
    borderColor: 'rgba(54, 162, 235, 1)',
    fill: false,
};

const data = {
    labels,
    datasets: [indiaData, pakistanData],
};

const config = {
    type: 'line',
    data,
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Line Graph: India vs Pakistan',
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Overs',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Runs',
                },
            },
        },
    },
};

const lineChart = new Chart(document.getElementById('line-chart'), config);