// Manejo de errores
window.addEventListener('error', function (e) {
    var now = new Date().toISOString();
    if (e.message.indexOf('MIME type') !== -1 || e.message.indexOf('Unexpected token') !== -1) {
        console.warn('Error no crítico:', e.message, 'advertencia', now);
        return;
    }
    console.error('Error crítico detectado:', e.message, e.filename, e.lineno, e.colno, now, navigator.userAgent);
});

// Validación de contenido
function validateContent(content) {
    try {
        if (typeof content === 'object') {
            JSON.parse(JSON.stringify(content));
            return true;
        }
        if (typeof content === 'string') {
            return content.length > 0;
        }
        return false;
    } catch (e) {
        console.error('Error durante la validación:', e);
        return false;
    }
}

// Funcionalidad adicional para imágenes y compatibilidad
$(function () {
    var s72cRx = /\/s72-c/,
        w72hRx = /\/w72-h/,
        eqw72hRx = /=w72-h/,
        supportsWebP = (function () {
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d')) &&
                elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        })();
});
