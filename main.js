window.addEventListener('resize', function() {
    if (window.innerWidth > 991) {
        // Adicionar uma classe ao elemento
        document.getElementById('removivel').classList.add('container');
    } else {
        // Remover a classe do elemento
        document.getElementById('removivel').classList.remove('container');
    }
})