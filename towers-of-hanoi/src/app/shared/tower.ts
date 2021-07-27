import { fabric } from 'fabric';

export default class Tower {

  public rect: fabric.Rect;

  constructor() {
    this.rect = new fabric.Rect({
      width: 10,
      height: 50,
      fill: 'red',
    });


  // public onTowerDrag = (): void => {
  //   console.log('not implemented');
  // }

  };

}
