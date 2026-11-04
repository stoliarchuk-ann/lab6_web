import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./header/header";
import { Square } from "./class/square";
import { Rectangle } from "./class/rectangle";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: "./app.html",
  styleUrl: "./app.css"
})
export class App {
  square_show: string = "";
  rectangle_show: string = "";

  calcRectangles(a1: string, a2: string, diff: string, name1: string, name2: string) {
    let square = new Square(name1, parseInt(a1));
    let rectangle = new Rectangle(name2, parseInt(a2), parseInt(diff));

    this.square_show = "Площа квадрата " + square.name + " = " +  square.S() + ".";
    this.rectangle_show = "Площа прямокутника " + rectangle.name + " = " + rectangle.S() + ".";
  }
}