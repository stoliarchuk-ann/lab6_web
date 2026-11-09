import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { Header } from "./header/header";
import { Square } from "./class/square";
import { Rectangle } from "./class/rectangle";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, Header, RouterLink, RouterLinkActive],
  templateUrl: "./app.html",
  styleUrl: "./app.css"
})
export class App {
}