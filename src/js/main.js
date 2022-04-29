import { swiperMain } from "./modules/swiperMain.js"
import { topFilm } from "./modules/topfilm.js"

const API_KEY = '8c983825-227a-4a33-a9b9-3279f39a0204'

topFilm('https://kinopoiskapiunofficial.tech/api/v2.2/films/312/videos',API_KEY)
swiperMain()