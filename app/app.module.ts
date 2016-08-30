import { NgRedux } from 'ng2-redux';
// import * as createLogger from 'redux-logger';
import { rootReducer, AppState, INITIAL_STATE } from './reducers' ;
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { FormComponent }  from './form.component';

// const logger = createLogger;

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ NgRedux ]
})
export class AppModule {
    constructor(private ngRedux: NgRedux<AppState>) {
        // this.ngRedux.configureStore(rootReducer, INITIAL_STATE, [ logger ]);
        this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
