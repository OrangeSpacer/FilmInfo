import { actorsFilm } from "./modules/actorsMain.js";
import { moneyFilm } from "./modules/requestMainFilm.js";
import { test } from "./modules/test.js";
import { topFilm } from "./modules/topfilm.js"


const API_KEY = '8c983825-227a-4a33-a9b9-3279f39a0204'
const topFilmUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
const topSreailUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SHOW&ratingFrom=8&ratingTo=100&yearFrom=2021'


window.onload = () => {
    // test('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&ratingFrom=8&ratingTo=100&yearFrom=2021',API_KEY)
    topFilm(topFilmUrl,API_KEY)
    // swiperMain()
    setTimeout(() => moneyFilm(topFilmUrl,API_KEY), 1000)
    setTimeout(() => actorsFilm(topFilmUrl,API_KEY),1000)
};