import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-products-alerts",
  templateUrl: "./products-alerts.component.html",
  styleUrls: ["./products-alerts.component.css"]
})
export class ProductsAlertsComponent implements OnInit {
  @Input()
  produto: any;

  @Output()
  notificacao = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
