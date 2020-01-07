(function(){"use strict";
window.onload = function(){

var leftFox =document.getElementById('logoLeftContainer');
var rightFox = document.getElementById('logoRightContainer');

var staticNavLogo = document.getElementById('staticNavLogo');

staticNavLogo.addEventListener('mouseover', see);

var see = function()
{
  console.log('worked');
};

}})();
