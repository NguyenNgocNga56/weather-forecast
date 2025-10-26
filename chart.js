let tempChart = null;

function drawTempChart(labels, maxTemps, minTemps, isCelsius = true){
  const ctx = document.getElementById('tempChart').getContext('2d');
  if (tempChart) tempChart.destroy();

  tempChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.map(d => new Date(d).toLocaleDateString('vi-VN', {weekday:'short', day:'numeric'})),
      datasets: [
        {
          label: `Max (°${isCelsius?'C':'F'})`,
          data: maxTemps,
          borderColor: '#ff6b6b',
          backgroundColor: 'rgba(255,107,107,0.12)',
          tension: 0.3,
          pointRadius: 4,
          fill: true
        },
        {
          label: `Min (°${isCelsius?'C':'F'})`,
          data: minTemps,
          borderColor: '#3478f6',
          backgroundColor: 'rgba(52,120,246,0.08)',
          tension: 0.3,
          pointRadius: 4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        tooltip: { mode: 'index', intersect: false },
        title: { display: false }
      },
      interaction: { mode: 'index', intersect: false },
      scales: {
        y: { beginAtZero: false },
      }
    }
  });
}
