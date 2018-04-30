
import { BlockChain } from './count';
import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';
export const ADD_C = 'ADD_C';

export function addCoinReducer(state: BlockChain[] = [], action) {
    switch (action.type) {
        case ADD_COIN:
            console.log('statess', state, action.payload);
            return [...state, action.payload];
        case ADD_C:
            console.log('addcsa', state, action.payload);
            return [...state, action.payload];

        default:
            return state;
    }
}