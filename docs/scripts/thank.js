(function(window){
  "use strict";
  // type 'thankyou' on your keyboard
  var key = [84,72,65,78,75,89,79,85];
  var ck = 0;
  var max = key.length;

  var airguitar = function() {
    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.width = '600px';
    img.style.height = '300px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 300px)';
    img.style.bottom = '-300px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.bottom = '-30px';
    },50);

    window.setTimeout(function(){
      img.style.bottom = '-300px';
    }, 4300);
    window.setTimeout(function(){
      img.parentNode.removeChild(img);
      // shock.parentNode.removeChild(shock);
    }, 5400);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      airguitar();
      ck = 0;
    }

  };

  var init = function(data) {
    document.addEventListener('keyup', record);
  };

  var data = './images/thank.gif';

  init(data);

})(window);