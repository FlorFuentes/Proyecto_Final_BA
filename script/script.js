/* // Llamada a la API del clima
fetch('URL_DE_LA_API&APPID=TU_CLAVE_DE_API')
  .then(response => response.json())
  .then(data => {
    // Obtener la información relevante del clima
    const weatherCondition = data.weather[0].main;

    // Obtener el elemento de imagen en tu página
    const weatherImage = document.getElementById('weather-image');

    // Actualizar la imagen en función de la condición climática
    if (weatherCondition === 'Rain' || weatherCondition === 'Thunderstorm') {
      weatherImage.src = 'ruta_al_logo_cafe_caliente.png';
    } else if (weatherCondition === 'Clear') {
      weatherImage.src = 'ruta_al_jugo_naranja.png';
    }
  })
  .catch(error => {
    console.log('Error al obtener datos del clima:', error);
  });
 */