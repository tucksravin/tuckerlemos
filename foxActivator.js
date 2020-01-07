(function(){"use strict";
window.onload = function(){

var leftFox =document.getElementById('logoLeftContainer');
var rightFox = document.getElementById('logoRightContainer');

var staticNavLogo = document.getElementById('staticNavLogo');

staticNavLogo.addEventListener('mouseover',amListening);

var amListening = function()
{
  console.log('worked');
};

}})();
