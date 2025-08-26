function updateClock() {
  const now = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  document.getElementById('date').textContent = now.toLocaleDateString('de-DE', dateOptions);
  document.getElementById('time').textContent = now.toLocaleTimeString('de-DE', timeOptions);
}

setInterval(updateClock, 1000);
updateClock();

function updateStatusTime() {
  const now = new Date();
  const time = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('status-time').textContent = time;
}

setInterval(updateStatusTime, 1000);
updateStatusTime();
