// Function for setting cookie with reference, value and a day limit
function setCookie(reference, value, limit) {
    //Get current date
    const date = new Date();
    //Convert cookie day limit to correct format
    date.setTime(date.getTime() + (limit * 1000 * 60 * 60 * 24));
    //Set cookie expiry date
    let expires = "expires=" + date.toUTCString();
    //Save cookie
    document.cookie = reference + "=" + value + ";" + expires + ";path=/";
}

// Function for getting cookie by reference
function getCookie(reference) {
    let name = reference + "=";
    //Split cookie contents into array
    let cookieArray = document.cookie.split(';');
    //Iterate through cookies
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        //Remove leading whitespace
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            //Return cookie value
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

//Function for activating dark mode
function activateDarkMode()
{
    //Apply dark mode changes to page
    document.getElementById("menuBody").setAttribute("class", "navbar navbar-inverse");
    document.getElementById("body").setAttribute("class", "body-rapid-recipes-dark");
    document.getElementById("menuLogo").setAttribute("src", "images/company/rapid-recipes-logo-full-white.png");
    document.getElementById("content").setAttribute("class", "container content-rapid-recipes-dark");

    //Switch the theme button to activate light mode
    document.getElementById("switchTheme").setAttribute("onClick", "activateLightMode()");

    //Save theme to cookie
    setCookie("theme", "dark", 7);
}

//Function for activating light mode
function activateLightMode()
{
    //Apply light mode changes to page
    document.getElementById("menuBody").setAttribute("class", "navbar navbar-default");
    document.getElementById("body").setAttribute("class", "body-rapid-recipes");
    document.getElementById("menuLogo").setAttribute("src", "images/company/rapid-recipes-logo-full-black.png");
    document.getElementById("content").setAttribute("class", "container content-rapid-recipes");

    //Switch the theme button to activate dark mode
    document.getElementById("switchTheme").setAttribute("onClick", "activateDarkMode()");

    //Save theme to cookie
    setCookie("theme", "light", 7);
}

//Get theme from cookie
var theme = getCookie("theme");

//Check if theme is empty
if(theme != "")
{
    //Check if cookie theme is set to dark, apply dark mode theme if so, light mode theme if not
    if(theme == "dark")
    {
        activateDarkMode();
    }
    else
    {
        activateLightMode();
    }
}