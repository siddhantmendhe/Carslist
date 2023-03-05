import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, 
         addCar,
         removeCar,
         changeSearcTerm } from "./slices/carsSlice";

import {
    formReducer,
    changeName,
    changeCost
} from './slices/formSlice';

const store=configureStore({
    reducer:{
        cars:carsReducer,
        form:formReducer
    }
});

export {store,
        changeName,
        changeCost,
        addCar,
        removeCar,
        changeSearcTerm};