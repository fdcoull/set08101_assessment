function calculateSingleMeal()
{
    var proteinPercent = (document.getElementById("proteinQuantitySingle").value / document.getElementById("proteinTargetSingle").value) * 100;
    var caloriesPercent = (document.getElementById("caloriesQuantitySingle").value / document.getElementById("caloriesTargetSingle").value) * 100;
    var carbohydratesPercent = (document.getElementById("carbohydratesQuantitySingle").value / document.getElementById("carbohydratesTargetSingle").value) * 100;
    var fatPercent = (document.getElementById("fatQuantitySingle").value / document.getElementById("fatTargetSingle").value) * 100;

    if(document.getElementById("proteinQuantitySingle").value != "" && document.getElementById("proteinTargetSingle").value)
    {
        document.getElementById("proteinOutputSingle").value = proteinPercent.toPrecision(4) + "%";
    }

    if(document.getElementById("caloriesQuantitySingle").value != "" && document.getElementById("caloriesTargetSingle").value)
    {
        document.getElementById("caloriesOutputSingle").value = caloriesPercent.toPrecision(4) + "%";
    }

    if(document.getElementById("carbohydratesQuantitySingle").value != "" && document.getElementById("carbohydratesTargetSingle").value)
    {
        document.getElementById("carbohydratesOutputSingle").value = carbohydratesPercent.toPrecision(4) + "%";
    }

    if(document.getElementById("fatQuantitySingle").value != "" && document.getElementById("fatTargetSingle").value)
    {
        document.getElementById("fatOutputSingle").value = fatPercent.toPrecision(4) + "%";
    }
}

function calculateDailyMeals()
{
    var proteinPercent = ((parseFloat(document.getElementById("proteinQuantityBreakfastDaily").value) + parseFloat(document.getElementById("proteinQuantityLunchDaily").value) + parseFloat(document.getElementById("proteinQuantityDinnerDaily").value)) / document.getElementById("proteinTargetDaily").value) * 100;
    var caloriesPercent = ((parseFloat(document.getElementById("caloriesQuantityBreakfastDaily").value) + parseFloat(document.getElementById("caloriesQuantityLunchDaily").value) + parseFloat(document.getElementById("caloriesQuantityDinnerDaily").value)) / document.getElementById("caloriesTargetDaily").value) * 100;
    var carbohydratesPercent = ((parseFloat(document.getElementById("carbohydratesQuantityBreakfastDaily").value) + parseFloat(document.getElementById("carbohydratesQuantityLunchDaily").value) + parseFloat(document.getElementById("carbohydratesQuantityDinnerDaily").value)) / document.getElementById("carbohydratesTargetDaily").value) * 100;
    var fatPercent = ((parseFloat(document.getElementById("fatQuantityBreakfastDaily").value) + parseFloat(document.getElementById("fatQuantityLunchDaily").value) + parseFloat(document.getElementById("fatQuantityDinnerDaily").value)) / document.getElementById("fatTargetDaily").value) * 100;

    if(document.getElementById("proteinQuantityBreakfastDaily").value != "" && document.getElementById("proteinQuantityLunchDaily").value != "" && document.getElementById("proteinQuantityDinnerDaily").value != "" && document.getElementById("proteinTargetDaily").value)
    {
        document.getElementById("proteinOutputDaily").value = proteinPercent.toPrecision(4) + "%";
    }

    if(document.getElementById("caloriesQuantityBreakfastDaily").value != "" && document.getElementById("caloriesQuantityLunchDaily").value != "" && document.getElementById("caloriesQuantityDinnerDaily").value != "" && document.getElementById("caloriesTargetDaily").value)
    {
        document.getElementById("caloriesOutputDaily").value = caloriesPercent.toPrecision(4) + "%";
    }

    if(document.getElementById("carbohydratesQuantityBreakfastDaily").value != "" && document.getElementById("carbohydratesQuantityLunchDaily").value != "" && document.getElementById("carbohydratesQuantityDinnerDaily").value != "" && document.getElementById("carbohydratesTargetDaily").value)
    {
        document.getElementById("carbohydratesOutputDaily").value = carbohydratesPercent.toPrecision(4) + "%";
    }

    if(document.getElementById("fatQuantityBreakfastDaily").value != "" && document.getElementById("fatQuantityLunchDaily").value != "" && document.getElementById("fatQuantityDinnerDaily").value != "" && document.getElementById("fatTargetDaily").value)
    {
        document.getElementById("fatOutputDaily").value = fatPercent.toPrecision(4) + "%";
    }
}