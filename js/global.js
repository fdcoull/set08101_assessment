function setCookie(reference, value, limit) {
    const date = new Date();
    date.setTime(date.getTime() + (limit * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = reference + "=" + value + ";" + expires + ";path=/";
  }
  
  function getCookie(reference) {
    let name = reference + "=";
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }

function activateDarkMode()
{
    document.getElementById("menuBody").setAttribute("class", "navbar navbar-inverse");
    document.getElementById("body").setAttribute("class", "body-rapid-recipes-dark");
    document.getElementById("content").setAttribute("class", "container content-rapid-recipes-dark");

    document.getElementById("switchTheme").setAttribute("onClick", "activateLightMode()");

    setCookie("theme", "dark", 7);
}

function activateLightMode()
{
    document.getElementById("menuBody").setAttribute("class", "navbar navbar-default");
    document.getElementById("body").setAttribute("class", "body-rapid-recipes");
    document.getElementById("content").setAttribute("class", "container content-rapid-recipes");

    document.getElementById("switchTheme").setAttribute("onClick", "activateDarkMode()");

    setCookie("theme", "light", 7);
}

var theme = getCookie("theme");

if(theme != "")
{
    if(theme == "dark")
    {
        activateDarkMode();
    }
    else
    {
        activateLightMode();
    }
}