

export class Gif {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
  }

  get gifTemplate() {
    return `
    <div class="col-4 text-center text-uppercase"><span>${this.tag}</span><img class="ing-fluid" src="${this.url}" alt="">
    </div>
    `
  }
}