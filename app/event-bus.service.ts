import * as Rx from 'rxjs';
import { Action } from './actions.ts';

export default class EventBus {
    private subj: Rx.Subject<Action>;

    constructor() {
        this.subj = <Rx.Subject<Action>>new Rx.Subject();
    }

    pub(a: Action) {
        this.subj.next(a);
    }

    sub(f: (a: Action) => void) {
        this.subj.subscribe(f);
    }
};
