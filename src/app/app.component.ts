import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = '1.Intro';
  myBtn: string = 'My button'
  isDisable: boolean = true
  angularImagem: string = '../assets/favicon.ico'
  bgColor: string = 'green'
  color: string = 'white'
  counter: number = 1
  inputText: string = 'Input Text'

  incrementColor() {
    this.counter++;
  }

  message: string = 'Meu nome'
  classes: string = 'text bgColor'
}
