import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My 2nd Angular App</h1>
        <ul>
            <li *ngFor="let v of values"><span>x{{ v }}</span></li>
            <li [hidden]="!form.n"><span style="opacity: 0.5">{{ form.n }}</span></li>
        </ul>
        <form>
            <label>Push:<input [(ngModel)]="form.n" name="n" type="number" #spy/></label>
            <button (click)="push(form)" type="submit">Submit</button>
        </form>
    `
})

export class AppComponent {
    values: number[];
    form: { [k: string]: any };

    constructor() {
        this.values = [1, 2];
        this.form = { n: 3 };
    }

    push(f) {
        console.log(f);
        this.values.push(f.n);
    }

    inc() {
        this.values = this.values.concat(this.values.length);
        console.log('values = ' + this.values);
    }
}

