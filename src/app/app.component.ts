import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}
