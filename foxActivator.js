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

window.onresize = function()
{
  if(sideNav.style.width!='0%')
  {
    openSideNav();
  }

}

//start animation to the left, after half a second
//the second line randomizes the gif name so it resets the animation each time.
function toTheLeft()
{
  setTimeout(
    function(){
    leftFox.innerHTML = "<img src='images/foxToTheLeft.gif' alt='animated Logo' class='logo'id='foxToTheLeft' onmouseout='fromTheLeft()' onclick='closeSideNav()'/>";
    document.getElementById('foxToTheLeft').src = 'images/foxToTheLeft.gif'+'?a='+Math.random();
  }, 500);

};

//returns from left arrow to logo, half a second after mouseout
function fromTheLeft()
{
  setTimeout(
    function(){
      leftFox.innerHTML = "<img src='images/foxFromTheLeft.gif' alt='animated Logo' class='logo'id='foxFromTheLeft' onmouseover='toTheLeft()' onmouseout='fromTheLeft()' onclick='closeSideNav()'/>";
      document.getElementById('foxFromTheLeft').src = 'images/foxFromTheLeft.gif'+'?a='+Math.random();
    }, 1500);
}

function toTheRight()
{
  setTimeout(
    function(){
      rightFox.innerHTML = "<img src='images/foxToTheRight.gif' alt='animated Logo' class='logo'id='foxToTheRight' onmouseout='fromTheRight()' onclick='openSideNav()'/>";
      document.getElementById('foxToTheRight').src = 'images/foxToTheRight.gif'+'?a='+Math.random();
    }, 500);

}

function fromTheRight()
{
  setTimeout(
    function(){
      rightFox.innerHTML = "<img src='images/foxFromTheRight.gif' alt='animated Logo' class='logo'id='foxFromTheRight' onmouseover='toTheRight()' onmouseout='fromTheRight()' onclick='openSideNav()'/>";
      document.getElementById('foxFromTheRight').src = 'images/foxFromTheRight.gif'+'?a='+Math.random();
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

  logo.style.height = '4em';

  }

//centers nav text for cases when the nav is fullScreenSideNav
function fullScreenSideNav()
{
  
}
