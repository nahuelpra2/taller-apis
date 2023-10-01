  // URL de la API "TheCatAPI" para obtener fotos de gatitos
  const apiUrl = 'https://api.thecatapi.com/v1/images/search';

  // Número de imágenes de gatitos que deseas obtener
  const numberOfImages = 4; 

  // Realiza una solicitud GET utilizando la función fetch
  fetch(`${apiUrl}?limit=${numberOfImages}`)
      .then(response => {
          // Verifica si la respuesta es exitosa 
          if (!response.ok) {
              throw new Error(`HTTP error! Código: ${response.status}`);
          }
          // Convierte la respuesta JSON en un objeto JavaScript
          return response.json();
      })
      .then(data => {
          const catImagesElement = document.getElementById('fotos');
          // Muestra las imágenes en la página web
          data.forEach(cat => {
              const imgElement = document.createElement('img');
              imgElement.src = cat.url;
              imgElement.alt = 'Gatito';
              catImagesElement.appendChild(imgElement);
          });
      })
      .catch(error => {
          // Manejo de errores
          console.error('¡Hubo un problema con la solicitud!', error);
      });