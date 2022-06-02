import { ProxyState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";



function _draw(){
    let gift = ProxyState.gifts
    let template = ''
    gift.forEach( g => template += g.Template)
    document.getElementById('gifts').innerHTML = template
    
}



export class GiftsController{
    constructor(){
        ProxyState.on('gifts', _draw)
        console.log('is controller working');
        _draw()
        this.getGift()

    }


    async getGift(){
        giftsService.getGift()
        console.log('get gift');
    }


}