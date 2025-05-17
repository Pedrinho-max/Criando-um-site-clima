document.getElementById('weather-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const apiKey = 'SUA_API_KEY_AQUI';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
      document.getElementById('description').textContent = `Clima: ${data.weather[0].description}`;
      document.getElementById('humidity').textContent = `Umidade: ${data.main.humidity}%`;
      document.getElementById('wind-speed').textContent = `Velocidade do vento: ${data.wind.speed} m/s`;
      document.getElementById('weather-info').style.display = 'block';
    })
    .catch(error => alert('Cidade não encontrada. Tente novamente.'));
});
