import { Component } from '@angular/core';
import CanvasManager from './fabric/CanvasManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'towers-of-hanoi';

  canvasManager!: CanvasManager;

  ngAfterViewInit(): void {
    const canvasElement = document.querySelector('#canvas');

    this.canvasManager = new CanvasManager(canvasElement as HTMLCanvasElement);
  }
}
