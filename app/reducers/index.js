import { combineReducers } from 'redux';
import { ProductsReducer } from './products';


import { DataReducer } from './data';

import { BuyReducer } from './buysell';

export const reducers = combineReducers({

    data: DataReducer,
    total: BuyReducer
});
