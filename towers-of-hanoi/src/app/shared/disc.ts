import { fabric } from 'fabric';
import Tower from './tower';

export default class Disc {

  public rect: fabric.Rect;

  constructor(size: number) {
    this.rect = new fabric.Rect({
      width: 10 * (size + 1),
      height: 20,
      fill: '#f55',
    });

    this.rect.on('mouseup', function() {
      console.log('You let go of moiuse');
      // check if disc below this one is bigger, if not, return disc to previous tower.
    });

  }

  public onDiscMove = (): void => {
    console.log('not implemented');
  };

}
