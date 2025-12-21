const voteForm = document.getElementById('voteForm'); 
const ctx = document.getElementById('myChart');
 const chartColors = ['#00796b', '#26a69a', '#80cbc4']; let chart;

let voteData = JSON.parse(localStorage.getItem('votes')) || { 'عالی': 0, 'خوب': 0, 'ضعیف': 0 };

function updateChart() { const labels = Object.keys(voteData); const values = Object.values(voteData);

if (chart) chart.destroy();

chart = new Chart(ctx, { type: 'bar', data: { labels: labels, datasets: [{ label: 'تعداد رأی‌ها', data: values, backgroundColor: chartColors }] },
 options: { responsive: true, animation: { duration: 1000 }, scales: { y: { beginAtZero: true } } } }); }

voteForm.addEventListener('submit', function(e) { e.preventDefault();

const selected = document.querySelector('input[name="option"]:checked'); 
if (!selected) { alert('لطفاً یک گزینه را انتخاب کنید.');
 return; }

const value = selected.value; voteData[value]++; localStorage.setItem('votes', JSON.stringify(voteData)); 
updateChart(); voteForm.reset();

alert("رأی شما با موفقیت ثبت شد. ممنون از مشارکت‌تان!"); });

const darkToggle = document.getElementById('darkModeToggle');
 darkToggle.addEventListener('click', () => { document.body.classList.toggle('dark'); });

updateChart();

