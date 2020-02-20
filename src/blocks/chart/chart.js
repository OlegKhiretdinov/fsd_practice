import Chart from 'chart.js';
var ctx = document.getElementById('roomChart');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [{
      label: '260 голосов',
      data: [130, 65, 65, 0],
      backgroundColor: [
        '#FFE39C',
        '#6FCF97',
        '#BC9CFF',
        '#919191'
      ],
      hoverBorderColor: [
        '#FFE39C',
        '#6FCF97',
        '#BC9CFF',
        '#919191'
      ],
      borderWidth: 2,
      hoverBorderWidth: 6,
      borderAlign: 'inner',
    }]
  },
  options: {
    title: {
      display: true,
      fontColor: '#BC9CFF',
      fontSize: 24,
      text: '260 голосов'
    },
    legend: {
      position: 'right',
      align: 'left',
      labels: {
        usePointStyle: true,
        fontSize: 12,
        boxWidth: 150,
      }
    },
    cutoutPercentage: 90,
  }
})