window.onload = function()
{
  leftFox = document.getElementById('logoLeftContainer');
  rightFox = document.getElementById('logoRightContainer');
  sideNav = document.getElementById('sideNav');
  main = document.getElementById('main');
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
