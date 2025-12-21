  const votes = JSON.parse(localStorage.getItem('votes')) || { yes: 0, no: 0 };

  const ctx = document.getElementById('resultChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['رضایت‌مند', 'ناراضی'],
      datasets: [{
        data: [votes.yes, votes.no],
        backgroundColor: ['#4caf50', '#f44336'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    }
  });


  