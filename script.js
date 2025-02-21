document.addEventListener('DOMContentLoaded', () => {
    const greenSlider = document.getElementById('greenSlider');
    const redSlider = document.getElementById('redSlider');
    const greenCode = document.getElementById('greenCode');
    const redCode = document.getElementById('redCode');
    const leftSection = document.querySelector('.left');
    const rightSection = document.querySelector('.right');
    
    // Sección central fija en blanco
    const centerCode = document.getElementById('centerCode');
    centerCode.textContent = 'rgb(255, 255, 255)';

    // Función para actualizar la sección verde
    function updateGreen() {
        const g = parseInt(greenSlider.value);
        const rgbString = `rgb(0, ${g}, 0)`;
        leftSection.style.backgroundColor = rgbString;
        greenCode.textContent = rgbString;
    }

    // Función para actualizar la sección roja
    function updateRed() {
        const r = parseInt(redSlider.value);
        const rgbString = `rgb(${r}, 0, 0)`;
        rightSection.style.backgroundColor = rgbString;
        redCode.textContent = rgbString;
    }

    // Escuchar cambios en los sliders
    greenSlider.addEventListener('input', updateGreen);
    redSlider.addEventListener('input', updateRed);

    // Inicialización con valores predeterminados
    updateGreen();
    updateRed();
});
