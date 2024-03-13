const ctx = document.getElementById('grafico1');

    let labelX=["Brasil", "EUA", "África", "Japão"]
    let valoresX=[10,20,30,40]

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: labelX,
        datasets: [{
        label: 'Número de Votos',
        data: valoresX,
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
