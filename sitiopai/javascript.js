     window.onscroll = function() {
        fuente();
        senaletica();
        editorial();
        identidad();
        interaccion();
      };


      function fuente() {
        if (document.body.scrollTop >= 2500 || document.documentElement.scrollTop >= 2500) {
          document.getElementById("contenedor").classList.add('fuente');
        }
      }

      function senaletica() {
        if (document.body.scrollTop >= 3700 || document.documentElement.scrollTop >= 3700) {
          document.getElementById("senaletica1").classList.add('sin-disenio-2');
        }
      }

      function editorial() {
        if (document.body.scrollTop >= 4100 || document.documentElement.scrollTop >= 4100) {
          document.getElementById("editorial1").classList.add('sin-disenio-3');
        }
      }

      function identidad() {
        if (document.body.scrollTop >= 4700 || document.documentElement.scrollTop >= 4700) {
          document.getElementById("identidad1").classList.add('sin-disenio-5');
        }
      }

      function interaccion() {
        if (document.body.scrollTop >= 5000 || document.documentElement.scrollTop >= 5000) {
          document.getElementById("interaccion1").classList.add('sin-disenio-6');
        }
      }
