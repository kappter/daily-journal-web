async function loadData() {
  const scriptUrl = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; // Replace with deployed script ID
  const response = await fetch(scriptUrl);
  const data = await response.json();
  renderMaster24(data);
}

function renderMaster24(data) {
  const container = document.getElementById("master24");
  container.innerHTML = `
    <div class="section">Date: ${data.date}</div>
    <div class="section">Meals: ${data.meals.join(", ")}</div>
    <div class="section">Events: ${data.events.join(", ")}</div>
    <div class="section">Photos: ${data.photos.map(p => `<a href="${p}" target="_blank">View</a>`).join(", ")}</div>
    <table><tr><th>Planet</th><th>Rise</th><th>Set</th></tr>${data.planets.map(p => `<tr><td>${p.name}</td><td>${p.rise}</td><td>${p.set}</td></tr>`).join("")}</table>
    <div class="section">Weather: ${data.weather.join(", ")}</div>
    <div class="section">Tarot: ${data.tarot.card} (${data.tarot.orientation}) - ${data.tarot.keywords}</div>
    <div class="section">Reflections: ${data.reflections}</div>
  `;
  if (data.steps) {
    const ctx = document.createElement("canvas").getContext("2d");
    container.appendChild(ctx.canvas);
    new Chart(ctx, {
      type: 'line',
      data: { labels: ['Day', 'Week', 'Month'], datasets: [{ label: 'Steps', data: data.steps, backgroundColor: '#4BC0C0' }] },
      options: { scales: { y: { beginAtZero: true } } }
    });
  }
}

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.html(document.getElementById("master24").innerHTML, {
    callback: function(doc) { doc.save("DailyJournal_09-07-2025.pdf"); },
    x: 10, y: 10, width: 190, windowWidth: 800
  });
}

loadData();
