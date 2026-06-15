// Asegurar que el efecto de fondo y los temas funcionen al cargar
document.addEventListener('DOMContentLoaded', () => {
    
    // Función para alternar modo claro/oscuro
    window.toggleTheme = function() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        
        // Ajuste dinámico de colores si se activa el modo claro
        document.documentElement.style.setProperty('--bg-dark', isLight ? '#ffffff' : '#0a0a0a');
        document.documentElement.style.setProperty('--text-main', isLight ? '#000000' : '#ffffff');
    };

    // Validación del formulario con mensaje de confirmación
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí llamarías a EmailJS.sendForm(...)
            const msg = document.createElement('div');
            msg.className = 'alert alert-info mt-3';
            msg.innerText = '✅ Mensaje enviado correctamente';
            this.appendChild(msg);
            setTimeout(() => msg.remove(), 3000);
        });
    }
});