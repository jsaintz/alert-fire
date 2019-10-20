import { Component, OnInit } from "@angular/core";
import { routerTransition } from "src/app/router.animations";

@Component({
    selector: "app-payment",
    templateUrl: "./payment.component.html",
    styleUrls: ["./payment.component.scss"],
    animations: [routerTransition()]
})
export class PaymentComponent implements OnInit {
    ngOnInit() {}

    constructor() {}
}
