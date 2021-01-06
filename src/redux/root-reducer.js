import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import countReducer from "./count/count.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["count"],
};

const rootReducer = combineReducers({
  count: countReducer,
});

export default persistReducer(persistConfig, rootReducer);
