import { combineReducers } from 'redux';

import { DataReducer } from './data';

import { BuyReducer } from './buysell';

export const reducers = combineReducers({

    data: DataReducer,
    total: BuyReducer
});
