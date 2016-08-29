import * as R from 'ramda';

export interface AppState { values: Number[]; };
export const INITIAL_STATE = { values: [1, 2] };

export function rootReducer(state, action) {
    switch (action.type) {
        case 'futureValueRemoved':
            return R.dissoc('futureValue', state);
        case 'futureValueAssigned':
            return R.assoc('futureValue', action.futureValue, state);
        case 'push':
            return R.assoc(
                'values',
                R.concat(state.values, [action.value]),
                state
            );
        default:
            return state;
    }
}
