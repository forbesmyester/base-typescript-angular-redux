import { Component, EventEmitter, Output, Input } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { AppState } from "./reducers";

export interface Form {
    n: number;
};

@Component({
    selector: "form-holder",
    template: `
        <form>
            <p>{{ message }}</p>
            <label>Push:<input (change)="c()" [(ngModel)]="form.n" name="n" type="number" #spy/></label>
            <button (click)="s(form)" type="submit">Submit</button>
            <a href="#" (click)="a(form)">a</a>
        </form>
    `
})

export class FormComponent {

    @Input() message: string;
    private form: Form = { n: 0 };
    @Output() onNewValue = new EventEmitter<number>();
    @Output() onSubmit = new EventEmitter<number>();

    constructor(private ngRedux: NgRedux<AppState>) {}

    a(f: Form) {
        this.ngRedux.dispatch({ type: 'a'});
    }

    s(f: Form) {
        this.onSubmit.emit(f.n);
    }

    c() {
        this.onNewValue.emit(this.form.n);
    }

}


