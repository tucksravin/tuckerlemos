(function(){"use strict";
window.onload = function(){

var whatsShowing = 0;

//getting all necessary elements

var aural = document.getElementById('aural');
var atri = document.getElementById('atri');

var textual = document.getElementById('textual');
var ttri = document.getElementById('ttri');

var visual = document.getElementById('visual');
var vtri = document.getElementById('vtri');

var main = document.getElementById('main');
var centralImage = document.getElementById('centralImage');
var tOne = document.getElementById('rightTextOne');
var tTwo = document.getElementById('rightTextTwo');
var tThree = document.getElementById('rightTextThree');

//mouseovers and outs on a selector
aural.onmouseover = aTouch;
atri.onmouseover = aTouch;
aural.onmouseout = aLeave;
atri.onmouseout = aLeave;

textual.onmouseover = tTouch;
ttri.onmouseover = tTouch;
textual.onmouseout = tLeave;
ttri.onmouseout = tLeave;

visual.onmouseover = vTouch;
vtri.onmouseover = vTouch;
visual.onmouseout = vLeave;
vtri.onmouseout = vLeave;

//clicking on a selector

aural.addEventListener('click', aClick);
atri.addEventListener('click', aClick);

};

//tells us whats on the display of the four selectors
// 0 is home (I make stuff)
// 1 is Aural, 2 is Textual, 3 is visual
var whatsShowing = 0;

//when you touch the elements they change color
var aTouch = function()
{
  aural.style.color = "#ffccff";
  atri.src = 'images/atriangle.png';
};

var tTouch = function()
{
  textual.style.color = "#ccffff";
  ttri.src = 'images/ttriangle.png';
};

var vTouch = function()
{
  visual.style.color = "#ffffcc";
  vtri.src = 'images/vtriangle.png';
};

//and when you mouse off they revert, unless it's in their setup
var aLeave = function()
{
  if(whatsShowing=!1)
  {
    aural.style.color = '#e1e1e1';
    atri.src = 'images/triangle.png';
  }
};

var tLeave = function()
{
  if(whatsShowing!=2)
  {
    textual.style.color = '#e1e1e1';
    ttri.src = 'images/triangle.png';
  }
};

var vLeave = function()
{
  if(whatsShowing!=1)
  {
    visual.style.color = '#e1e1e1';
    vtri.src = 'images/triangle.png';
  }
};

//on clicking a selector, the whole website changes,
//showing a different image and all is slightly colored

var aClick = function()
{
  if(whatsShowing!=1)
  {
    whatsShowing = 1;

    main.style.color = '#ffccff';
    textual.style.color = '#e1e1e1';
    visual.style.color = '#e1e1e1';
    centralImage.src = 'images/microphone.png';
    console.log('aural');

  }
  else{
    {
      console.log('home');
      backHome();
    }
  }
}

var backHome = function()
{
 whatsShowing = 0;
 main.style.color = '#e1e1e1';
 aural.style.color = '#e1e1e1';
 textual.style.color = '#e1e1e1';
 visual.style.color = '#e1e1e1';
 centralImage.src = 'images/ryelee.jpeg';
}

})();
