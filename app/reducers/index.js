import { combineReducers } from 'redux';

import { DataReducer } from './data';
import { BuyReducer } from './buysell';
import { TableReducer } from './table';

export const reducers = combineReducers({

    data: DataReducer,
    total: BuyReducer,
    table: TableReducer
});
