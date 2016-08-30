import * as R from 'ramda';
import * as Actions from './actions';

export interface AppState { values: Number[]; };
export const INITIAL_STATE = { values: [1, 2] };

export function rootReducer(state, action: Actions.FutureValueAssigned | Actions.Push) {
    switch (action.type) {
        case 'futureValueRemoved':
            return R.dissoc('futureValue', state);
        case 'futureValueAssigned':
            return R.assoc(
                'futureValue',
                (<Actions.FutureValueAssigned>action).futureValue,
                state
            );
        case 'push':
            return R.assoc(
                'values',
                R.concat(state.values, [(<Actions.Push>action).value]),
                state
            );
        default:
            return state;
    }
}
