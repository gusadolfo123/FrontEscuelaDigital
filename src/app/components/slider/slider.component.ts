import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  images = ["../../../assets/img/3.png", "../../../assets/img/1.jpg"];
  constructor() {}

  ngOnInit() {}
}
