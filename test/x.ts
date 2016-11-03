import test from 'ava';
import { rootReducer } from '../app/reducers';
import * as Actions from '../app/actions';

test('Can get xsl lines', function(t) {
    t.deepEqual(
        rootReducer({values: [1, 2, 3]}, { type: 'a' }),
        { values: [1, 2, 3], a: true }
    );
});
