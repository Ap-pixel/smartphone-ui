function updateClock() {
  const now = new Date();

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString('de-DE', dateOptions);

  const time = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  document.querySelectorAll('.clock-time').forEach(el => {
    el.textContent = time;
  });
}

setInterval(updateClock, 1000);
updateClock();
