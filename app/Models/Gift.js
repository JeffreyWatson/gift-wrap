





export class Gift{
    constructor(data){
        this.tag = data.title
        this.img = data.bitly_gif_url
    }



get Template(){
    return `
    <div class="col-3">${this.tag}</div>
    <div class="col-3">${this.img}</div>

    `
}

}