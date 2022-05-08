import { backMainPage } from "./modules/back.js";
import { filtersFilm } from "./modules/filtersfilm.js";
import { modal } from "./modules/modal.js";
import { search } from "./modules/search.js";
import { swiperMain } from "./modules/swiperMain.js";
import { topFilm } from "./modules/topfilm.js"


const API_KEY = '8c983825-227a-4a33-a9b9-3279f39a0204'
const topFilmUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'


window.onload = () => {
    topFilm(topFilmUrl,API_KEY,'films')
    filtersFilm()
    search()
    swiperMain()
    backMainPage()
    modal()
};