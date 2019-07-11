export class Feed {
  public imgSrc: string;
  public description: string;
  public likes: number = 0;
  public dislikes: number = 0;
  public id: string = 'somebody';
  constructor(
    imgSrc: string,
    desc: string,
    ) {
    this.description = desc;
    this.imgSrc = imgSrc;
  }
}
