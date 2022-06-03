import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";


const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
    setTimeout: 12000
})

class GiftsService {

    async getGift() {
        const res = await sandboxApi.get()
        console.log("im working", res.data);
        ProxyState.gifts = res.data.map(g => new Gift(g))
    }

}

export const giftsService = new GiftsService()