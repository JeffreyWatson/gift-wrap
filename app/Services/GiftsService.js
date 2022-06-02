import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";


const gifApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/search',
    setTimeout: 5000
})

let params = {
    api_key: 'QqUaTFMrgpN3C1eL3H9eZ0FY4ez4yTJ1',
    rating: 'g',
    q: 'Look you did it'
}




class GiftsService {

    async getGift() {
        const res = await gifApi.get('', { params })
        console.log("im working", res.data);
        ProxyState.gifts = res.data.data.map(g => new Gift(g))
    }



}





export const giftsService = new GiftsService()