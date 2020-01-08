// Control Center Functionality

window.controlCenter = {};

( function( window, $, app ) {

    app.init = () => {
        app.cache();

        if( app.hasSection() ) {

            app.showScreens();
        }
    }

    app.cache = () => {
        app.$c = {
            controlCenterSection: document.getElementsByClassName( 'control-center__container' ),
            controlCenterScreen: [...document.getElementsByClassName( 'control-center__screen' )],
        }
    }

    app.hasSection = () => {

        return app.$c.controlCenterSection.length;
    }

    app.showScreens = () => {

        let initialTimeout = 500;
        let timeout = 150;
        
        app.$c.controlCenterScreen.sort( ( a, b ) => a.dataset.showScreen - b.dataset.showScreen );

        app.$c.controlCenterScreen.forEach( ( el ) => {
            
            setTimeout( () => {
                
                el.classList.add( 'control-center__screen--show' );
            }, initialTimeout );
            
            initialTimeout = initialTimeout + timeout;
        });
    }

    app.init();

} ( window, jQuery, window.controlCenter ) );