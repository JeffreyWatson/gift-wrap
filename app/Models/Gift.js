

export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
    }



    get Template() {
        return `
    <div class="col-4 text-center text-uppercase"><span>${this.tag}</span><img class="ing-fluid" src="${this.url}" alt="">
    </div>
    `
    }

}