// Wait for the page load
window.onload = () => {

    // Set Javascript to be strict for variables definition
    'use strict';

    // Check if the browser supports the PWAs
    if ('serviceWorker' in navigator) {

        // Service worker registration
        navigator.serviceWorker
            .register('./sw.js').then(function (registration) {

            // Service worker registered correctly.
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        },
            function (err) {

                // Troubles in registering the service worker. :(
                console.log('ServiceWorker registration failed: ', err);
            });
    }
}




