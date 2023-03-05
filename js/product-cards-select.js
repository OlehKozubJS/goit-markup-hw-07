let productLinks = document.getElementsByClassName("product-link-content");
let productImages = document.getElementsByClassName("product-image");
let productText = document.getElementsByClassName("product-description");

let productCards = document.getElementsByClassName("product-card");

let productCardClasses =
{
"allFilter":       [true, true, true, true, true, true, true, true, true],

"appFilter":       [true, false, true, false, false, false, false, false, false],

"marketingFilter": [false, true, false, true, false, true, false, false, false],

"designFilter":    [false, false, false, false, true, false, true, false, false],

"websiteFilter":   [false, false, false, false, false, false, false, true, true]
}

let productCardWidth = [100, 100, 100, 100, 100, 100, 100, 100, 100];

let cardData = productCardClasses["allFilter"];

setInterval(cardAppearsAndDisappears, 1);

function cardFilter(cardType) {
    cardData = productCardClasses[cardType];
}

function cardAppearsAndDisappears() {
    for (let itemIndex = 0; itemIndex < productCards.length; ++itemIndex) {
        if (cardData[itemIndex] == true  && productCardWidth[itemIndex] < 100) ++productCardWidth[itemIndex];
        if (cardData[itemIndex] == false && productCardWidth[itemIndex] >   0) --productCardWidth[itemIndex];

        productLinks[itemIndex].style = `width: ${productCardWidth[itemIndex]}%; overflow: hidden;`;
        productImages[itemIndex].style = `width: ${productCardWidth[itemIndex]}%; overflow: hidden;`;        
        productText[itemIndex].style = `width: ${productCardWidth[itemIndex]}%; overflow: hidden;`;

        if (productCardWidth[itemIndex] == 0) productCards[itemIndex].className = "product-card none";
        else productCards[itemIndex].className = "product-card";
    }
}
