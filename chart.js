let tempChart = null;

function drawTempChart(labels, maxTemps, minTemps, isCelsius = true) {
  const ctx = document.getElementById('tempChart').getContext('2d');
  if (tempChart) tempChart.destroy();

  const formattedLabels = labels.map(d => {
    try { return new Date(d).toLocaleDateString('vi-VN', {weekday:'short', day:'numeric'}); }
    catch(e) { return d; }
  });

  tempChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: formattedLabels,
      datasets: [
        {
          label: `Max (°${isCelsius ? 'C' : 'F'})`,
          data: maxTemps,
          borderColor: '#ff6b6b',
          backgroundColor: 'rgba(255,107,107,0.12)',
          tension: 0.28,
          pointRadius: 4,
          fill: true
        },
        {
          label: `Min (°${isCelsius ? 'C' : 'F'})`,
          data: minTemps,
          borderColor: '#2f9eff',
          backgroundColor: 'rgba(47,158,255,0.08)',
          tension: 0.28,
          pointRadius: 4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: { mode: 'index', intersect: false }
      },
      interaction: { mode: 'index', intersect: false },
      scales: {
        y: { beginAtZero: false, ticks: { color: '#264653' } },
        x: { ticks: { color: '#264653' } }
      }
    }
  });
}
