import { combineReducers } from "redux";

import Categorys from "./Categorys";
import Mains from "./Mains";
import Products from "./Products";
import Branches from "./Branches";

const rootReducer = combineReducers({
  Categorys,
  Mains,
  Products,
  Branches
});

export default rootReducer;
