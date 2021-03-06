function SwiperItem() {
    "use strict";

const marketika = {
    href: "https://romamirzo.github.io/layout_marketika/",
    src: "img/dribble_shot_marketika.PNG"
},
myCompany = {
    href: "https://romamirzo.github.io/layout_myCompany/",
    src: "img/dribble_shot_someproject.PNG"
},
siteKino = {
    href: "https://romamirzo.github.io/site_kino/",
    src: "img/dribble_shot_films.PNG"
},
medicineSite = {
    href: "https://romamirzo.github.io/medicine_site/",
    src: "img/dribble_shot_pills.PNG"
},
portfolio = {
    href: "https://romamirzo.github.io/site_portfolio/",
    src: "img/dribble_shot_portfolio.PNG"
},
passwordGenerator = {
    href: "https://romamirzo.github.io/jsLoginPasswordGenerator/",
    src: "img/dribble_shot_generator.PNG"
},
snakeGame = {
    href: "https://romamirzo.github.io/snake_game/",
    src: "img/dribble_shot_snake.PNG"
},
converter = {
    href: "https://romamirzo.github.io/currencyConverterAjax/",
    src: "img/dribble_shot_converter.PNG"
},
stubbsTest = {
    href: "https://romamirzo.github.io/StubbsTest/",
    src: "img/dribble_shot_idMetal.PNG"
},
reactMovieApp = {
    href: "https://romamirzo.github.io/reactMovieApp/",
    src: "img/dribble_shot_reactMovieApp.PNG"
};

const siteInfo = [
  marketika, myCompany, siteKino,
  medicineSite, portfolio, passwordGenerator,
  snakeGame, converter, stubbsTest, reactMovieApp];
  
const reverseSiteInfo = siteInfo.reverse();
const swiperDiv = document.getElementsByClassName("swiper-wrapper")[0];

function insertSwiperItem(siteInfo) {
    for (let i = 0; i < siteInfo.length; i++) {
        swiperDiv.insertAdjacentHTML('afterbegin', `<div class="swiper-slide"><a href="${siteInfo[i].href}" target="_blank" class="potrfol_img"><img src="${siteInfo[i].src}" alt="myDribble-shot"></a></div>`)
        // console.log(i);
    }
};

insertSwiperItem(reverseSiteInfo);}

module.exports = SwiperItem;