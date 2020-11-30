import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = [];
  checkoutForm;

  constructor(
    private CartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.CartService.getItems();
  }

  onSubmit(customerData) {
    this.CartService.clearCart();
    this.checkoutForm.reset();

    console.warn("Sua compra foi realizada", customerData);
  }
}
