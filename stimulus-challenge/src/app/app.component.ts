import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'stimulus-challenge';
  name = new FormControl();

  resultSuccess = false;

  pledgeForm = new FormGroup({
    name: new FormControl(''),
    zip: new FormControl(''),
    nonProfits: new FormControl(''),
    smBiz: new FormControl('')
  });

  constructor(private _router:Router) { }

  makePledge() {
    if (this.pledgeForm.valid  && (this.pledgeForm.value["nonProfits"] > 0 || this.pledgeForm.value["smBiz"] > 0)) {
      console.log(this.pledgeForm.value);
      //TODO: make a call back home with the data...
      this.resultSuccess = true;
    } else {
      alert("Looks like the ZIP Code field isn't quite right, or you haven't entered at least one donation amount.  Could you check those fields for me, please?");
    }
  }
}
