document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    // Delegación de eventos para mejor rendimiento
    galleryContainer.addEventListener('click', (e) => {
        
        // 1. Lógica del botón "Me gusta"
        const likeBtn = e.target.closest('.like-btn');
        if (likeBtn) {
            e.preventDefault(); // Evitar comportamientos por defecto
            e.stopPropagation(); // Evitar propagación al click de la tarjeta

            const card = likeBtn.closest('.card');
            const icon = likeBtn.querySelector('i');

            // Toggle de la clase visual
            likeBtn.classList.toggle('liked');

            if (likeBtn.classList.contains('liked')) {
                // Cambiar icono a sólido (relleno)
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                
                // REORDENAR: Mover al principio con animación suave
                // prepend mueve el nodo del DOM al primer lugar
                galleryContainer.prepend(card);
                
                // Pequeño foco para accesibilidad
                card.focus();
            } else {
                // Volver a hueco
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
            return;
        }

        // 2. Lógica del botón "Visitar" (Efecto permanente)
        const actionBtn = e.target.closest('.action-btn');
        if (actionBtn) {
            e.preventDefault();
            // Cambio permanente de estilos y texto
            actionBtn.classList.add('visited');
            actionBtn.innerText = "¡Agendado!";
            actionBtn.style.backgroundColor = "#2ecc71";
            actionBtn.style.color = "#fff";
            
            // Efecto visual en la tarjeta
            const card = actionBtn.closest('.card');
            card.style.borderColor = "#2ecc71";
        }
    });
});