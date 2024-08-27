import './style.css';


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('redirect-button');
    
    button.addEventListener('click', () => {
      window.location.href = 'https://sv.siman.com/'; // Cambia esto por la URL deseada
    });
  });
  