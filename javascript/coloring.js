
window.onload = function(){

//getting all necessary elements

var aural = document.getElementById('aural');
var atri = document.getElementById('atri');

var textual = document.getElementById('textual');
var ttri = document.getElementById('ttri');

var visual = document.getElementById('visual');
var vtri = document.getElementById('vtri');

var main = document.getElementById('main');
var centralImage = document.getElementById('centralImage');

var iAmA = document.getElementById('iAmA');
var thingsIDo = document.getElementById('thingsIDo');


//mouseovers and outs on a selector
aural.addEventListener('mouseover', aTouch);
atri.addEventListener('mouseover', aTouch);
aural.addEventListener('mouseout', aLeave);
atri.addEventListener('mouseout', aLeave);

textual.addEventListener('mouseover', tTouch);
ttri.addEventListener('mouseover', tTouch);
textual.addEventListener('mouseout', tLeave);
ttri.addEventListener('mouseout', tLeave);

visual.addEventListener('mouseover', vTouch);
vtri.addEventListener('mouseover', vTouch);
visual.addEventListener('mouseout', vLeave);
vtri.addEventListener('mouseout', vLeave);

//clicking on a selector

aural.addEventListener('click', aClick);
atri.addEventListener('click', aClick);

textual.addEventListener('click', tClick);
ttri.addEventListener('click', tClick);

visual.addEventListener('click', vClick);
vtri.addEventListener('click', vClick);

}

//tells us whats on the display of the four selectors
// 0 is home (I make stuff)
// 1 is Aural, 2 is Textual, 3 is Visual
var whatsShowing = 0;

//when you touch the elements they change color
var aTouch = function()
{
  aural.style.color = '#ccffcc';
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

//and when you mouse off they revert, unless it's in their main
var aLeave = function()
{

  if(whatsShowing!=1)
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
  if(whatsShowing!=3)
  {
    visual.style.color = '#e1e1e1';
    vtri.src = 'images/triangle.png';
  }
};

//on clicking a selector, we change to one of four modes,
//showing a different image and all is slightly colored, with diff text

var aClick = function()
{
  if(whatsShowing!=1)
  {
    whatsShowing = 1;

    main.style.color = '#ccffcc';
    textual.style.color = '#e1e1e1';
    visual.style.color = '#e1e1e1';
    iAmA.innerHTML = 'I am';
    thingsIDo.innerHTML = 'a Podcaster, Audio Producer and Composer';
    centralImage.src = 'images/microphone.png';
    tLeave();
    vLeave();
    console.log('aural');

  }
  else{
    {
      console.log('home');
      backHome();
    }
  }
}

var tClick = function()
{
  if(whatsShowing!=2)
  {
    whatsShowing = 2;

    main.style.color = "#ccffff";
    textual.style.color = '#e1e1e1';
    visual.style.color = '#e1e1e1';
    iAmA.innerHTML = 'I am';
    thingsIDo.innerHTML = 'a Writer';
    centralImage.src = 'images/rhodia.jpg';
    aLeave();
    vLeave();
    console.log('textual');

  }
  else{
    {
      console.log('home');
      backHome();
    }
  }
}

var vClick = function()
{
  if(whatsShowing!=3)
  {
    whatsShowing = 3;

    main.style.color = "#ffffcc";
    textual.style.color = '#e1e1e1';
    visual.style.color = '#e1e1e1';
    centralImage.src = 'images/a6000.png';
    iAmA.innerHTML = 'I am';
    thingsIDo.innerHTML = 'a Web Designer, Photographer, and Video Editor';
    aLeave();
    tLeave();
    console.log('visual');

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
 aLeave();
 tLeave();
 vLeave();
 centralImage.src = 'images/ryelee.jpeg';
 iAmA.innerHTML = '';
 thingsIDo.innerHTML = '';
}

window.onload = function()
{
  leftFox = document.getElementById('logoLeftContainer');
  rightFox = document.getElementById('logoRightContainer');
  sideNav = document.getElementById('sideNav');
  main = document.getElementById('main');
  logos = document.getElementsByClassName('logo');

  if(window.innerWidth<600)
  {
    sideNav.style.width = '0%';
    main.style.width = '100%';
  }
}
