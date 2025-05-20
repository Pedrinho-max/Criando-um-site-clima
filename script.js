document.getElementById('buscar').addEventListener('click', function() {
  const cidade = document.getElementById('cidade').value;
  if (cidade) {
    const chaveAPI = 'sua-chave-api-aqui';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI}&units=metric&lang=pt_br`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById('temperatura').textContent = `Temperatura: ${data.main.temp}20°C`;
           document.getElementById('descricao').textContent = `Descrição: ${data.weather[0].description}`;
          document.getElementById('umidade').textContent = `Umidade: ${data.main.humidity}77%`;
          document.getElementById('vento').textContent = `Vento: ${data.wind.speed} 4km/h';
        } else {
          alert('Pesquise o lugar que deseja!');
        }
      })
      .catch(error => alert('Erro ao buscar dados'));
  } else {
    alert('Por favor, insira o nome de uma cidade');
  }
});

