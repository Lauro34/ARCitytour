// Function to handle the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const correo = document.getElementById('correo').value;
    if (asunto && mensaje && correo) {
        window.location.href = `mailto:info@arcitytour.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}%0A%0AFrom: ${encodeURIComponent(correo)}`;
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Function to open the survey
function abrirEncuesta() {
    window.open('https://www.surveymonkey.com/', '_blank');
}
