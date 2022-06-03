import { gifsService } from "../Services/GifsService.js";



export class GifsController {
  constructor() {
    this.getGif()
  }

  async getGif() {
    gifsService.getGif()
    console.log("gif working");
  }
}