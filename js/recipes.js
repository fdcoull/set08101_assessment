const recipes = `[
    {"name":"curry", "category":"dinner", "time":"10 minutes", "health":"10g salt", "price":"10.00", "meals":"3", "method":"Description", "ingredients":[["1","2"],["3","4"]]},
    {"name":"curry", "category":"dinner", "time":"10 minutes", "health":"10g salt", "price":"10.00", "meals":"3", "method":"Description", "ingredients":[["1","2"],["3","4"]]}
]`;

var recipesJson = JSON.parse(recipes);

function getMeal()
{
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");

    let recipesJson = JSON.parse(recipes);

    document.getElementById("title").innerHTML = recipesJson[id].name;
    document.getElementById("image").setAttribute("src", "images/recipes/" + id + ".jpg");
    document.getElementById("time").innerHTML = "<span class=\"glyphicon glyphicon-time\"></span> " + recipesJson[id].time;
    document.getElementById("health").innerHTML = "<span class=\"glyphicon glyphicon-heart\"></span> " + recipesJson[id].health;
    document.getElementById("price").innerHTML = "<span class=\"glyphicon glyphicon-tag\"></span> " + recipesJson[id].price;
    document.getElementById("meals").innerHTML = "<span class=\"glyphicon glyphicon-user\"></span> " + recipesJson[id].meals;

    document.getElementById("share-facebook").setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=https://fdcoull.github.io/set08101_assessment/meal.html?id=" + id);
    document.getElementById("share-whatsapp").setAttribute("href", "whatsapp://send?text=https://fdcoull.github.io/set08101_assessment/meal.html?id=" + id);
    document.getElementById("share-twitter").setAttribute("href", "http://twitter.com/share?text=Check out this recipe&url=https://fdcoull.github.io/set08101_assessment/meal.html?id=" + id);
    document.getElementById("share-email").setAttribute("href", "mailto:? &subject=Rapid Recipes &body=Check out this recipe: https://fdcoull.github.io/set08101_assessment/meal.html?id=" + id);

    for(var i = 0; i < recipesJson[id].ingredients.length; i++)
    {
        document.getElementById("ingredients").innerHTML += "<tr><td>" + recipesJson[id].ingredients[i][0] + "</td><td>" + recipesJson[id].ingredients[i][1] + "</td></tr>";
    }

    document.getElementById("method").innerHTML = recipesJson[id].method;
}