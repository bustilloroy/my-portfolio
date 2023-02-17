const dropDown = document.getElementById('drop-list');

window.addEventListener('click', event => {
  if (event.target === dropDown) {
    if (dropDown.style.display === 'block') {
      dropDown.style.display = 'none';
    }
  }
  console.log('Hello, World');
  return;
});