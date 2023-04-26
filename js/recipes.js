const recipes = `[
    {"name":"Oatmeal with Berries", "category":"breakfast", "time":"5 minutes", "health":"kcal: 214", "price":"~£0.50", "meals":"1", "method":"Boil kettle, pour portion of oats into a bowl along with frozen berries and once kettle is boiled, pour in along with ingredients.", "ingredients":[["Portion of Oats","£0.10"],["Portion of Berries","£0.40"],["Water","£0.00"]]},
    {"name":"Poached Egg/Hummus Toast", "category":"breakfast", "time":"10 minutes", "health":"kcal: 517", "price":"~£0.70", "meals":"1", "method":"Boil pan of water and crack an egg into it, leave for 7 minutes and then use spatula or spoon to take egg out. If using vegan option, skip this step. Put bread in toaster and allow time for cooking. Place egg on toasted bread or spread hummus.", "ingredients":[["Bread","£0.10"],["Hummus/Egg","£0.60"]]},
    {"name":"Lentil Soup", "category":"lunch", "time":"30 minutes", "health":"10g salt", "price":"10.00", "meals":"3", "method":"Description", "ingredients":[["1","2"],["3","4"]]},
    {"name":"Chicken/Hummus Sandwich", "category":"lunch", "time":"5 minutes", "health":"10g salt", "price":"10.00", "meals":"3", "method":"Description", "ingredients":[["1","2"],["3","4"]]},
    {"name":"Prawn/Chickpea Curry", "category":"dinner", "time":"40 minutes", "health":"10g salt", "price":"10.00", "meals":"3", "method":"Description", "ingredients":[["1","2"],["3","4"]]},
    {"name":"Chicken/Tofu Pasta", "category":"dinner", "time":"40 minutes", "health":"10g salt", "price":"10.00", "meals":"3", "method":"Description", "ingredients":[["1","2"],["3","4"]]}
]`;

let recipesJson = JSON.parse(recipes);

function getMeal()
{
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");

    document.getElementById("title").innerHTML = recipesJson[id].name;
    document.getElementById("image").setAttribute("src", "images/recipes/" + id + ".jpg");
    document.getElementById("time").innerHTML = "<span class=\"glyphicon glyphicon-time\"></span> " + recipesJson[id].time;
    document.getElementById("health").innerHTML = "<span class=\"glyphicon glyphicon-heart\"></span> " + recipesJson[id].health;
    document.getElementById("price").innerHTML = "<span class=\"glyphicon glyphicon-tag\"></span> " + recipesJson[id].price;
    document.getElementById("meals").innerHTML = "<span class=\"glyphicon glyphicon-user\"></span> " + recipesJson[id].meals;

    //Check if share button IDs exist, display if so, omit if not (print-friendly page)
    if(document.getElementById("print") && document.getElementById("share-facebook") && document.getElementById("share-whatsapp") && document.getElementById("share-twitter") && document.getElementById("share-email"))
    {
        document.getElementById("print").setAttribute("href", "meal-print.html?id=" + id);
        document.getElementById("share-facebook").setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=https://fdcoull.github.io/set08101_assessment/meal.html?id=" + id);
        document.getElementById("share-whatsapp").setAttribute("href", "whatsapp://send?text=https://fdcoull.github.io/set08101_assessment/meal.html?id=" + id);
        document.getElementById("share-twitter").setAttribute("href", "http://twitter.com/share?text=Check out this recipe&url=https://fdcoull.github.io/set08101_assessment/meal.html?id=" + id);
        document.getElementById("share-email").setAttribute("href", "mailto:? &subject=Rapid Recipes &body=Check out this recipe: https://fdcoull.github.io/set08101_assessment/meal.html?id=" + id);
    
    }

    for(var i = 0; i < recipesJson[id].ingredients.length; i++)
    {
        document.getElementById("ingredients").innerHTML += "<tr><td>" + recipesJson[id].ingredients[i][0] + "</td><td>" + recipesJson[id].ingredients[i][1] + "</td></tr>";
    }

    document.getElementById("method").innerHTML = recipesJson[id].method;
}

function listMeals(category)
{
    for(var i = 0; i < recipesJson.length; i++)
    {
        if(category == recipesJson[i].category || category == "all")
        {
            document.getElementById("recipeList").innerHTML += "<a href=\"meal.html?id=" + i + "\"><div class=\"col-sm-3\" style=\"padding: 1em;\">" + "<img src=\"images/recipes/" + i + ".jpg\" width=\"100%\"><p>" + recipesJson[i].name + "</p></div>";
        }
    }
}