import { fabric } from 'fabric';

import Disc from '../shared/disc';
import Tower from '../shared/tower';


export interface ICanvasOptions {
  discs: number;
  towers: number;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface ICanvasManager {
}

const defaultOptions: ICanvasOptions = {
  discs: 3,
  towers: 3,
  left: 100,
  top: 100,
  width: 200,
  height: 200
};

export default class CanvasManager implements ICanvasManager {
  private canvas: fabric.Canvas;

  private discs: Disc[] = [];
  private towers: Tower[] = [];


  constructor(
    canvas: HTMLCanvasElement,
    options: ICanvasOptions = defaultOptions
  ) {
    this.canvas = new fabric.Canvas(canvas, {  });

    this.canvas.add(
      new fabric.Rect({ top: 100, left: 100, width: 50, height: 50, fill: '#f55' }),
      new fabric.Circle({ top: 140, left: 230, radius: 75, fill: 'green' }),
      new fabric.Triangle({ top: 300, left: 210, width: 100, height: 100, fill: 'blue' })
    );

    this.discs = new Array(options.discs)
        .fill(0)
        .map((_, size) => new Disc(size));

    this.towers = new Array(options.towers)
        .fill(0)
        .map(_ => new Tower());


    this.towers.forEach(tower => this.canvas.add(tower.rect));

    this.discs.forEach((disc) => this.canvas.add(disc.rect));

    this.canvas.requestRenderAll();
  }


}
