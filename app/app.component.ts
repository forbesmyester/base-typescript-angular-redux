import { Component } from "@angular/core";
import { AppState } from "./reducers";
import { NgRedux, select } from "ng2-redux";

@Component({
    selector: "my-app",
    template: `
        <h1>My 1st ngRedux/Angular App</h1>
        {{ values | async }}
        <span [hidden]="!(a | async)">A</span>
        <ul>
            <li *ngFor="let v of values | async"><span>{{ v }}</span></li>
            <li [hidden]="!(futureValue | async)"><span style="opacity: 0.5">{{ futureValue | async }}</span></li>
        </ul>
        <form-holder
            (onNewValue)="onFutureValue($event)"
            (onSubmit)="onSubmit($event)"
            [message]="'Please enter and submit a number below'">
        </form-holder>
    `
})

export class AppComponent {

    @select() a: boolean;
    @select() values: Number[];
    @select() futureValue: Number[];

    onSubmit(n) {
        this.ngRedux.dispatch({ type: 'push', value: n });
    }

    onFutureValue(n) {
        console.log("N: ", n);
        if (!n) {
            return this.ngRedux.dispatch({ type: 'futureValueRemoved' });
        }
        this.ngRedux.dispatch({
            type: 'futureValueAssigned',
            futureValue: n
        });
    }

    constructor(private ngRedux: NgRedux<AppState>) { }

}

