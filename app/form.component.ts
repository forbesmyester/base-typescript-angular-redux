import { Component, EventEmitter, Output, Input } from "@angular/core";
import EventBus from './event-bus.service';

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
        </form>
    `
})

export class FormComponent {

    @Input() message: string;
    private form: Form = { n: 0 };
    @Output() onNewValue = new EventEmitter<number>();
    @Output() onSubmit = new EventEmitter<number>();
    private e: EventBus;

    constructor() {
        this.e = new EventBus();
        this.e.sub((e) => {
            console.log("E: ", e);
        });
    }

    s(f: Form) {
        this.onSubmit.emit(f.n);
        this.e.pub({type: "FormSubmit"});
    }

    c() {
        this.onNewValue.emit(this.form.n);
    }

}


