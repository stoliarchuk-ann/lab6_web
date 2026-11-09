import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Square } from '../class/square';
import { Rectangle } from '../class/rectangle';
import { Header } from '../header/header';

@Component({
  imports: [CommonModule, Header],
  selector: 'app-lab6',
  styleUrl: './lab6.css',
  templateUrl: './lab6.html',
})
export class Lab6 {
  square_show: string = "";
  rectangle_show: string = "";

  calcRectangles(a1: string, a2: string, diff: string, name1: string, name2: string) {
    let square = new Square(name1, parseInt(a1));
    let rectangle = new Rectangle(name2, parseInt(a2), parseInt(diff));

    this.square_show = "Площа квадрата " + square.name + " = " +  square.S() + ".";
    this.rectangle_show = "Площа прямокутника " + rectangle.name + " = " + rectangle.S() + ".";
  }
}