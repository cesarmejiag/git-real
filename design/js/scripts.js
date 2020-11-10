(function() {
    'use strict';
    console.log('Scripts loaded.');

    /**
     * Remove loader from DOM.
     */
    function removeLoader() {
        var loader = document.querySelector('.loader');
        
        if (loader) {
            loader.classList.remove('loader-visible');
            loader.addEventListener('transitionend', function() {
                loader.parentElement.removeChild(loader);
            });
        }
    }
    
    window.addEventListener('load', function() {
        removeLoader();
    });

})();