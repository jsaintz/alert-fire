import { Component, OnInit } from "@angular/core";
import { routerTransition } from "src/app/router.animations";

@Component({
    selector: "app-payment",
    templateUrl: "./payment.component.html",
    styleUrls: ["./payment.component.scss"],
    animations: [routerTransition()]
})
export class PaymentComponent implements OnInit {
    handler:any = null;
    
    ngOnInit() {
        this.loadStripe();
    }

    constructor() {}

    loadStripe() {
     
        if(!window.document.getElementById('stripe-script')) {
          var s = window.document.createElement("script");
          s.id = "stripe-script";
          s.type = "text/javascript";
          s.src = "https://checkout.stripe.com/checkout.js";
          window.document.body.appendChild(s);
        }
    }

    pay(amount) {    
 
        var handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Token Created!!');
          }
        });
     
        handler.open({
          name: 'PicPay',
          description: 'Forma de pagamento',
          amount: amount * 100
        });
     
    }
}
