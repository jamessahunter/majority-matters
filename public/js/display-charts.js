// console.log("Inside DISPLAY chart JS!");
// console.log("Handlebars ",Handlebars);

// const Handlebars = require();

// const chartData= [
//     { label: 'Label 1', value: 10 },
//     { label: 'Label 2', value: 20 },
//     { label: 'Label 3', value: 15 },
// ];

// // Handlebars template
// const chartTemplate = Handlebars.compile(`
//   {{#each chartData}}
//     <div class="bar">
//       <div class="label">{{label}}</div>
//       <div class="bar-value" style="width: {{value}}%"></div>
//     </div>
//   {{/each}}
// `);

// // Render the chart
// const chartContainer = document.getElementById('chartContainer');
// chartContainer.innerHTML = chartTemplate({ chartData });


// // Initialize the chart
// new Chart(document.getElementById('chartCanvas'), {
//     type: 'horizontalBar',
//     data: {
//       labels: chartData.map(data => data.label),
//       datasets: [{
//         data: chartData.map(data => data.value),
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         x: {
//           beginAtZero: true
//         }
//       }
//     }
//   });