import { GifsController } from "./Controllers/GifsController.js";
import { GiftsController } from "./Controllers/GiftsController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();


  giftsController = new GiftsController()
  gifsController = new GifsController()


}

window["app"] = new App();
