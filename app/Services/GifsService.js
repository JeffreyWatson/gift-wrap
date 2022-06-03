import { ProxyState } from "../AppState.js";
import { Gif } from "../Models/Gif.js";


const gifApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search',
  setTimeout: 5000
})

let params = {
  api_key: 'QqUaTFMrgpN3C1eL3H9eZ0FY4ez4yTJ1',
  rating: 'pg',
  q: ''
}

class GifsService {

  async getGif() {
    const res = await gifApi.get('', { params })
    console.log("gifs service", res.data);
    ProxyState.gifs = res.data.data.map(g => new Gif(g))
  }
}

export const gifsService = new GifsService()