function generateVodka(response) {
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i < response.drinks.length; i++) {
            var result = response.drinks[Math.floor(Math.random() * response.drinks.length)];
        };
        console.log(result)
        var vodkaName = $("<h1>");
        vodkaName.text("Get yourself a " + result.strDrink + "!!");
        $(".vodka-name").append(vodkaName);
        var vodkaImg = $("<img>");
        vodkaImg.attr('src', result.strDrinkThumb);
        $(".vodka-img").append(vodkaImg);
        var vodkaID = $("<p>");
        vodkaID.text("Drink ID: " + result.idDrink);
        $(".vodka-id").append(vodkaID);
        $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + result.strDrink,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var drinkInstructions = response.drinks[0]
        var vodkaIngredients = $("<ul>").appendTo(".vodka-ingredients");
            vodkaIngredients.append("<li>" + drinkInstructions.strMeasure1 + "" + drinkInstructions.strIngredient1 + "</li>");
            vodkaIngredients.append("<li>" + drinkInstructions.strMeasure2 + "" + drinkInstructions.strIngredient2 + "</li>");
            vodkaIngredients.append("<li>" + drinkInstructions.strMeasure3 + "" + drinkInstructions.strIngredient3 + "</li>");
            vodkaIngredients.append("<li>" + drinkInstructions.strMeasure4 + "" + drinkInstructions.strIngredient4 + "</li>");
            vodkaIngredients.append("<li>" + drinkInstructions.strMeasure5 + "" + drinkInstructions.strIngredient5 + "</li>");
        console.log(vodkaIngredients)
        var vodkaInstructions = $("<h2>");
        vodkaInstructions.text(drinkInstructions.strInstructions);
        $(".vodka-instructions").append(vodkaInstructions);
        console.log(vodkaInstructions);
    });
    });
};

$("#vodka").click(function (event) {
    $(".vodka-name").empty();
    $(".vodka-img").empty();
    $(".vodka-id").empty();
    $(".vodka-ingredients").empty();
    $(".vodka-instructions").empty();
    generateVodka()
});

function generateGin(response) {
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
        method: "GET"
    }).then(function () {
        for (i = 0; i < response.drinks.length; i++) {
            var result = response.drinks[Math.floor(Math.random() * response.drinks.length)];
        };
        console.log(result)
        var ginName = $("<h1>");
        ginName.text("Get yourself a " + result.strDrink + "!!");
        $(".gin-name").append(ginName);
        var ginImg = $("<img>");
        ginImg.attr('src', result.strDrinkThumb);
        $(".gin-img").append(ginImg);
        var ginID = $("<p>");
        ginID.text("Drink ID: " + result.idDrink);
        $(".gin-id").append(ginID);
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + result.strDrink,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });
    });
};

$("#gin").click(function (event) {
    $(".gin-name").empty();
    $(".gin-img").empty();
    $(".gin-id").empty();
    $(".gin-ingredients").empty();
    $(".gin-instructions").empty();
    generateGin();
});