import * as R from 'ramda';
import * as Actions from './actions';

export interface AppState { a?: false, values: Number[]; };
export const INITIAL_STATE = { values: [1, 2] };

export function rootReducer(state, action: Actions.Action) {
    switch (action.type) {
        case 'a':
            return R.assoc('a', true, state);
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
