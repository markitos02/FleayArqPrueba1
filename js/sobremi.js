// Efecto de hover en los botones de la página
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#0077cc';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#00aaff';
  });
});
