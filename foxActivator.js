window.onload = function()
{
  var sideNav = document.getElementById('sideNav');
  var main = document.getElementById('main');
  var subLogo = document.getElementById('subLogo');
  var supLogo = document.getElementById('supLogo');

  subLogo.addEventListener('mouseover', toTheRight);
  subLogo.addEventListener('mouseout', fromTheRight);
  subLogo.addEventListener('click', openSideNav);

  supLogo.addEventListener('mouseover', toTheLeft);
  supLogo.addEventListener('mouseout', fromTheLeft);
  supLogo.addEventListener('click', closeSideNav);

  //closes side nav if the window gets to small
  if(window.innerWidth<600)
  {
    sideNav.style.width = '0%';
    main.style.width = '100%';
  }
}

window.onresize = function()
{
  //adjusts size of sideNav if it is open
  if(sideNav.style.width!='0%')
  {
    openSideNav();
  }

}

//start animation to the left, after half a second
//the second line randomizes the gif name so it resets the animation each time.
var toTheLeft = function()
{
  var leftFox = document.getElementById('logoLeftContainer');

  setTimeout(
    function(){
    leftFox.innerHTML = "<img src='images/foxToTheLeft.gif' alt='animated Logo' class='logo'id='supLogo'/>";
    document.getElementById('supLogo').src = 'images/foxToTheLeft.gif'+'?a='+Math.random();
    var supLogo = document.getElementById('supLogo');
    supLogo.addEventListener('mouseout', fromTheLeft);
    supLogo.addEventListener('click', closeSideNav);
  }, 500);

};

//returns from left arrow to logo, half a second after mouseout
var fromTheLeft = function()
{
  var leftFox = document.getElementById('logoLeftContainer');

  setTimeout(
    function(){
      leftFox.innerHTML = "<img src='images/foxFromTheLeft.gif' alt='animated Logo' class='logo'id='supLogo'/>";
      document.getElementById('supLogo').src = 'images/foxFromTheLeft.gif'+'?a='+Math.random();
      var supLogo = document.getElementById('supLogo');
      supLogo.addEventListener('mouseover', toTheLeft);
      supLogo.addEventListener('mouseout', fromTheLeft);
      supLogo.addEventListener('click', closeSideNav);
    }, 1500);
}

var toTheRight = function()
{
  var rightFox = document.getElementById('logoRightContainer');

  setTimeout(
    function(){
      rightFox.innerHTML = "<img src='images/foxToTheRight.gif' alt='animated Logo' class='logo'id='subLogo' onmouseout='fromTheRight()' onclick='openSideNav()'/>";
      document.getElementById('subLogo').src = 'images/foxToTheRight.gif'+'?a='+Math.random();
      var subLogo = document.getElementById('subLogo');
      subLogo.addEventListener('mouseout', fromTheRight);
      subLogo.addEventListener('click', openSideNav);
    }, 500);
}

var fromTheRight = function()
{
  var rightFox = document.getElementById('logoRightContainer');

  setTimeout(
    function(){
      rightFox.innerHTML = "<img src='images/foxFromTheRight.gif' alt='animated Logo' class='logo'id='subLogo'/>";
      document.getElementById('subLogo').src = 'images/foxFromTheRight.gif'+'?a='+Math.random();
      var subLogo = document.getElementById('subLogo');
      subLogo.addEventListener('mouseover', toTheRight);
      subLogo.addEventListener('mouseout', fromTheRight);
      subLogo.addEventListener('click', openSideNav);
    }, 1500);

}

//closes side nav after clicking the left fox
function closeSideNav()
{
  sideNav.style.width = '0%';
  main.style.width = '100%';

}

//opens sideNav, 100% on smaller tablets and whatever breakpoints I set in style.css otherwise.
function openSideNav()
{
  var w = window.innerWidth;
  if(w<600)
    {
      sideNav.style.width = '100%';
      fullScreenSideNav();
    }
  else if(w<992)
    {
      sideNav.style.width = '25%';
      main.style.width = '75%';
    }
  else
    {
      sideNav.style.width = '20%';
      main.style.width = '80%';
    }

}

//centers nav text for cases when the nav is fullScreenSideNav
function fullScreenSideNav()
{

}
