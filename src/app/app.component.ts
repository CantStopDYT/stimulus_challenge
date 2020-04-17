import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'stimulus-challenge';
  name = new FormControl();
  private _http: HttpClient;
  
  public smallBiz: number = 0;
  public nonProfit: number = 0;

  resultSuccess = false;

  pledgeForm = new FormGroup({
    Name: new FormControl(''),
    ZipCode: new FormControl(''),
    NonProfit: new FormControl(''),
    SmallBiz: new FormControl('')
  });

  constructor(private http: HttpClient) { 
    this._http = http;
    
    //this.getStats();
  }

  makePledge() {
    if (this.pledgeForm.valid  && (this.pledgeForm.value["NonProfit"] > 0 || this.pledgeForm.value["SmallBiz"] > 0)) {
      console.log(this.pledgeForm.value);
      
      //this._http.post("https://api.stimuluschallenge.us/pledge", this.pledgeForm.value);      
      
      this._http.post("/form-endpoint", this.pledgeForm.value, {headers: {"Content-Type" : ["application/x-www-form-urlencoded"]}}).subscribe(r=>{});
      
      this.resultSuccess = true;
    } else {
      alert("Looks like the ZIP Code field isn't quite right, or you haven't entered at least one donation amount.  Could you check those fields for me, please?");
    }
  }
  
  getStats() {
    console.log("getStats() hit");
    
    this._http.get("https://api.stimuluschallenge.us/stats").subscribe((result) => {
      this.nonProfit = result["SmallBizTotal"];
      this.smallBiz = result["SmallBizTotal"];
    });
  }
}
