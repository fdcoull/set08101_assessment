function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }

function activateDarkMode()
{
    //document.cookie = "theme=dark; expires=Thu, 18 Dec 2013 12:00:00 UTC";

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