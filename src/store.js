import { createStore } from "redux-box";
import { module as menusModule } from "./modules/menus";
import { module as platesModule } from "./modules/plates";

const store = createStore([menusModule, platesModule]);

export default store;
