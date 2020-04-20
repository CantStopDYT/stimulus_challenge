import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  private _http: HttpClient;
  private _route: ActivatedRoute;
  private _router: Router;

  public smallBiz: number = 0;
  public nonProfit: number = 0;

  pledgeForm = new FormGroup({
    Name: new FormControl(''),
    ZipCode: new FormControl(''),
    NonProfit: new FormControl(''),
    SmallBiz: new FormControl('')
  });

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this._http = http;
    this._route = route;
    this._router = router;
  }

  ngOnInit(): void {
  }

  makePledge() {
    if (this.pledgeForm.valid  && (this.pledgeForm.value["NonProfit"] > 0 || this.pledgeForm.value["SmallBiz"] > 0)) {

      var formValues = "form-name=PledgeForm&";
      formValues += "Name=" + encodeURIComponent(this.pledgeForm.value["Name"]) + "&";
      formValues += "ZipCode=" + encodeURIComponent(this.pledgeForm.value["ZipCode"]) + "&";
      formValues += "NonProfit=" + encodeURIComponent(this.pledgeForm.value["NonProfit"]) + "&";
      formValues += "SmallBiz=" + encodeURIComponent(this.pledgeForm.value["SmallBiz"]);

      this._http.post("/form-endpoint?" + formValues, formValues, {headers: {"Content-Type" : ["application/x-www-form-urlencoded"]}}).subscribe(r=>{});

      this._router.navigate(['/success']).then(r=>{});
      
      //ga('send', 'event', 'Pledge', 'submit', 'Challenge Pledge');
    } else {
      alert("Looks like the ZIP Code field isn't quite right, or you haven't entered at least one donation amount.  Could you check those fields for me, please?");
    }
  }

  getStats() {
    this._http.get("https://api.stimuluschallenge.us/stats").subscribe((result) => {
      this.nonProfit = result["SmallBizTotal"];
      this.smallBiz = result["SmallBizTotal"];
    });
  }
}
