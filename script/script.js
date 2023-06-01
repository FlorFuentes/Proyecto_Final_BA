const abrirFormulario = document.getElementById('abrirFormulario');

const formulario = document.getElementById('contForm');

abrirFormulario.addEventListener('click', function (event) {
  event.preventDefault();
  // Vemos si el formulario está visible o oculto
  const formularioVisible = formulario.style.display !== 'none';

  // Cambiamos el estado del formulario (visible u oculto) según su estado actual
  if (formularioVisible) {
    formulario.style.display = 'none';
  } else {
    formulario.style.display = 'block';
  }
});
