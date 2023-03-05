let productLinks = document.getElementsByClassName("product-link-content");
let productImages = document.getElementsByClassName("product-image");
let productText = document.getElementsByClassName("product-description");

let productCards = document.getElementsByClassName("product-card");

let productCardClasses = ["appFilter", "marketingFilter", "appFilter", "marketingFilter", "designFilter", "marketingFilter", "designFilter", "websiteFilter", "websiteFilter"];

let productCardWidth = [100, 100, 100, 100, 100, 100, 100, 100, 100];

let cardData = "allFilter";

setInterval(cardAppearsAndDisappears, 1);

function cardFilter(cardType) {
    cardData = cardType;
}

function cardAppearsAndDisappears() {
    for (let itemIndex = 0; itemIndex < productCards.length; ++itemIndex) {
        if ((productCardClasses[itemIndex] == cardData || cardData == "allFilter") && productCardWidth[itemIndex] < 100) ++productCardWidth[itemIndex];
        if (productCardClasses[itemIndex] != cardData && cardData != "allFilter" && productCardWidth[itemIndex] > 0) --productCardWidth[itemIndex];

        productLinks[itemIndex].style = `width: ${productCardWidth[itemIndex]}%; overflow: hidden;`;
        productImages[itemIndex].style = `width: ${productCardWidth[itemIndex]}%; overflow: hidden;`;        
        productText[itemIndex].style = `width: ${productCardWidth[itemIndex]}%; overflow: hidden;`;

        if (productCardWidth[itemIndex] == 0) productCards[itemIndex].className = "product-card none";
        else productCards[itemIndex].className = "product-card";
    }
}
